#!/usr/bin/env bash
# Restore both Drill4J databases from a backup made by the chart's pre-upgrade/pre-rollback hook.
#
#   scripts/restore.sh <release> [backup-dir] [-n namespace]
#
# Without backup-dir the available backups are listed. Steps:
#   1. scale admin to 0 (no writes during restore)
#   2. pg_restore --clean both databases from /backups/<backup-dir>
#   3. scale admin back
# Data written after the backup is lost.
set -euo pipefail

NS_ARGS=()
POS=()
while [ $# -gt 0 ]; do
  case "$1" in
    -n|--namespace) NS_ARGS=(-n "$2"); shift 2 ;;
    *) POS+=("$1"); shift ;;
  esac
done
RELEASE="${POS[0]:?usage: restore.sh <release> [backup-dir] [-n namespace]}"
BACKUP="${POS[1]:-}"
k() { kubectl "${NS_ARGS[@]}" "$@"; }
SEL="app.kubernetes.io/instance=$RELEASE"

DEPLOY=$(k get deploy -l "$SEL,app.kubernetes.io/component=admin" -o jsonpath='{.items[0].metadata.name}')
CM=$(k get deploy "$DEPLOY" -o jsonpath='{.spec.template.spec.containers[0].envFrom[0].configMapRef.name}')
SECRET=$(k get deploy "$DEPLOY" -o jsonpath='{.spec.template.spec.containers[0].env[?(@.name=="DRILL_DB_PASSWORD")].valueFrom.secretKeyRef.name}')
KEY=$(k get deploy "$DEPLOY" -o jsonpath='{.spec.template.spec.containers[0].env[?(@.name=="DRILL_DB_PASSWORD")].valueFrom.secretKeyRef.key}')
PVC=$(k get job -l "$SEL,app.kubernetes.io/component=backup" -o jsonpath='{.items[0].spec.template.spec.volumes[0].persistentVolumeClaim.claimName}' 2>/dev/null || true)
PVC="${PVC:-$(k get pvc -l "$SEL,app.kubernetes.io/component=backup" -o jsonpath='{.items[0].metadata.name}')}"
IMAGE=$(k get deploy "$DEPLOY" -o jsonpath='{.spec.template.spec.initContainers[0].image}')
cmv() { k get cm "$CM" -o jsonpath="{.data.$1}"; }
HOST=$(cmv DRILL_DB_HOST); PORT=$(cmv DRILL_DB_PORT); USER=$(cmv DRILL_DB_USER_NAME)
DB=$(cmv DRILL_DB_NAME); MDB=$(cmv DRILL_METRICS_DB_NAME)

run_pod() {  # run_pod <name> <script>: runs a postgres-client pod with the backup PVC mounted
  k delete pod "$1" --ignore-not-found >/dev/null
  {
    cat <<EOF
apiVersion: v1
kind: Pod
metadata:
  name: $1
spec:
  restartPolicy: Never
  containers:
    - name: main
      image: $IMAGE
      command: ["sh", "-c"]
      args:
        - |
EOF
    printf '%s\n' "$2" | sed 's/^/          /'
    cat <<EOF
      env:
        - {name: PGHOST, value: "$HOST"}
        - {name: PGPORT, value: "$PORT"}
        - {name: PGUSER, value: "$USER"}
        - name: PGPASSWORD
          valueFrom: {secretKeyRef: {name: "$SECRET", key: "$KEY"}}
      volumeMounts:
        - {name: backups, mountPath: /backups}
  volumes:
    - name: backups
      persistentVolumeClaim: {claimName: "$PVC"}
EOF
  } | k apply -f - >/dev/null
  local phase=""
  until [ "$phase" = Succeeded ] || [ "$phase" = Failed ]; do
    sleep 2; phase=$(k get pod "$1" -o jsonpath='{.status.phase}')
  done
  k logs "$1"
  k delete pod "$1" --wait=false >/dev/null
  [ "$phase" = Succeeded ]
}

if [ -z "$BACKUP" ]; then
  echo "Backups in PVC $PVC:"
  run_pod drill-backup-list 'for d in /backups/2*; do echo "$(basename "$d")  $(tr "\n" " " < "$d/info" 2>/dev/null)"; done'
  exit 0
fi

REPLICAS=$(k get deploy "$DEPLOY" -o jsonpath='{.spec.replicas}')
echo "Restoring $DB and $MDB on $HOST from $BACKUP (admin $DEPLOY: $REPLICAS -> 0 -> $REPLICAS)"
if [ "${YES:-}" != "1" ]; then
  read -r -p "Data written after the backup will be lost. Continue? [y/N] " ok
  [ "$ok" = "y" ] || exit 1
fi

k scale deploy "$DEPLOY" --replicas=0
k wait --for=delete pod -l "$SEL,app.kubernetes.io/component=admin" --timeout=5m || true
run_pod drill-restore "set -e
for db in '$DB' '$MDB'; do
  f=\"/backups/$BACKUP/\$db.dump\"; [ -f \"\$f\" ] || { echo \"missing \$f\"; exit 1; }
  echo \"restoring \$db\"; pg_restore --clean --if-exists --no-owner -d \"\$db\" \"\$f\"
done
echo restore done"
k scale deploy "$DEPLOY" --replicas="$REPLICAS"
k rollout status deploy "$DEPLOY" --timeout=10m
