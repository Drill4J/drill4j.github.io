{{/* ---------- Names and labels ---------- */}}

{{- define "drill.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "drill.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{- define "drill.labels" -}}
helm.sh/chart: {{ printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" }}
app.kubernetes.io/name: {{ include "drill.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/* Selector labels. Usage: include "drill.selectorLabels" (dict "ctx" $ "component" "admin") */}}
{{- define "drill.selectorLabels" -}}
app.kubernetes.io/name: {{ include "drill.name" .ctx }}
app.kubernetes.io/instance: {{ .ctx.Release.Name }}
app.kubernetes.io/component: {{ .component }}
{{- end }}

{{- define "drill.adminName" -}}{{ include "drill.fullname" . }}-admin{{- end }}
{{- define "drill.uiName" -}}{{ include "drill.fullname" . }}-ui{{- end }}
{{- define "drill.postgresqlName" -}}{{ include "drill.fullname" . }}-postgresql{{- end }}
{{- define "drill.backupName" -}}{{ include "drill.fullname" . }}-backup{{- end }}

{{/* ---------- Images ---------- */}}

{{/* Usage: include "drill.image" (dict "ctx" $ "image" .Values.admin.image) */}}
{{- define "drill.image" -}}
{{- $registry := .ctx.Values.global.imageRegistry | default .image.registry -}}
{{- if $registry -}}
{{- printf "%s/%s:%s" $registry .image.repository .image.tag -}}
{{- else -}}
{{- printf "%s:%s" .image.repository .image.tag -}}
{{- end -}}
{{- end }}

{{/* postgres client image for init and hook containers */}}
{{- define "drill.pgClientImage" -}}
{{- include "drill.image" (dict "ctx" . "image" .Values.postgresql.image) -}}
{{- end }}

{{- define "drill.backupImage" -}}
{{- $img := .Values.backup.image -}}
{{- if $img.repository -}}
{{- include "drill.image" (dict "ctx" . "image" (dict "registry" $img.registry "repository" $img.repository "tag" (default .Values.postgresql.image.tag $img.tag))) -}}
{{- else -}}
{{- include "drill.pgClientImage" . -}}
{{- end -}}
{{- end }}

{{- define "drill.imagePullSecrets" -}}
{{- with .Values.global.imagePullSecrets }}
imagePullSecrets:
{{- range . }}
  - name: {{ . }}
{{- end }}
{{- end }}
{{- end }}

{{/* ---------- Database ---------- */}}

{{- define "drill.db.host" -}}
{{- if .Values.postgresql.enabled -}}{{ include "drill.postgresqlName" . }}{{- else -}}{{ .Values.externalDatabase.host }}{{- end -}}
{{- end }}

{{- define "drill.db.port" -}}
{{- if .Values.postgresql.enabled -}}{{ .Values.postgresql.port }}{{- else -}}{{ .Values.externalDatabase.port }}{{- end -}}
{{- end }}

{{- define "drill.db.ssl" -}}
{{- if .Values.postgresql.enabled -}}{{ .Values.postgresql.tls.enabled }}{{- else -}}{{ .Values.externalDatabase.ssl }}{{- end -}}
{{- end }}

{{/* "true" when admin uses the dedicated least-privilege role of the built-in PostgreSQL. */}}
{{- define "drill.adminUser.enabled" -}}
{{- if and .Values.postgresql.enabled .Values.postgresql.adminUser.enabled }}true{{ end -}}
{{- end }}

{{/* Login used by the admin application. drill.db.user stays the management user (db-init, backup). */}}
{{- define "drill.admin.db.user" -}}
{{- if include "drill.adminUser.enabled" . -}}{{ .Values.postgresql.adminUser.username }}{{- else -}}{{ include "drill.db.user" . }}{{- end -}}
{{- end }}

{{- define "drill.admin.db.passwordKey" -}}
{{- if include "drill.adminUser.enabled" . -}}{{ .Values.postgresql.adminUser.passwordKey }}{{- else -}}{{ include "drill.db.passwordKey" . }}{{- end -}}
{{- end }}

{{- define "drill.db.user" -}}
{{- if .Values.postgresql.enabled -}}{{ .Values.postgresql.auth.username }}{{- else -}}{{ .Values.externalDatabase.username }}{{- end -}}
{{- end }}

{{- define "drill.db.name" -}}
{{- if .Values.postgresql.enabled -}}{{ .Values.postgresql.database }}{{- else -}}{{ .Values.externalDatabase.database }}{{- end -}}
{{- end }}

{{- define "drill.db.metricsName" -}}
{{- if .Values.postgresql.enabled -}}{{ .Values.postgresql.metricsDatabase }}{{- else -}}{{ .Values.externalDatabase.metricsDatabase }}{{- end -}}
{{- end }}

{{/* Metrics DB overrides (external only). Empty = same as main DB. */}}
{{- define "drill.db.metrics" -}}
{{- if .Values.postgresql.enabled -}}{}{{- else -}}{{ toYaml .Values.externalDatabase.metrics }}{{- end -}}
{{- end }}

{{- define "drill.db.existingSecret" -}}
{{- if .Values.postgresql.enabled -}}{{ .Values.postgresql.auth.existingSecret }}{{- else -}}{{ .Values.externalDatabase.existingSecret }}{{- end -}}
{{- end }}

{{- define "drill.db.secretName" -}}
{{- include "drill.db.existingSecret" . | default (include "drill.fullname" .) -}}
{{- end }}

{{- define "drill.db.passwordKey" -}}
{{- if .Values.postgresql.enabled -}}{{ .Values.postgresql.auth.passwordKey }}{{- else -}}{{ .Values.externalDatabase.passwordKey }}{{- end -}}
{{- end }}

{{- define "drill.jwt.secretName" -}}
{{- .Values.admin.jwt.existingSecret | default (include "drill.fullname" .) -}}
{{- end }}

{{/* Env vars used by psql/pg_dump containers (main database). */}}
{{- define "drill.pgEnv" -}}
- name: PGHOST
  value: {{ include "drill.db.host" . | quote }}
- name: PGPORT
  value: {{ include "drill.db.port" . | quote }}
- name: PGUSER
  value: {{ include "drill.db.user" . | quote }}
- name: PGPASSWORD
  valueFrom:
    secretKeyRef:
      name: {{ include "drill.db.secretName" . }}
      key: {{ include "drill.db.passwordKey" . }}
- name: PGSSLMODE
  value: {{ ternary "require" "prefer" (eq (include "drill.db.ssl" .) "true") | quote }}
{{- end }}

{{/* Env vars for the metrics database, prefixed with M_ (falls back to main DB values in scripts). */}}
{{- define "drill.pgMetricsEnv" -}}
{{- $m := include "drill.db.metrics" . | fromYaml -}}
- name: M_PGHOST
  value: {{ $m.host | default (include "drill.db.host" .) | quote }}
- name: M_PGPORT
  value: {{ $m.port | default (include "drill.db.port" .) | toString | quote }}
- name: M_PGUSER
  value: {{ $m.username | default (include "drill.db.user" .) | quote }}
- name: M_PGPASSWORD
  valueFrom:
    secretKeyRef:
      name: {{ include "drill.db.secretName" . }}
      key: {{ $m.passwordKey | default (include "drill.db.passwordKey" .) }}
- name: M_PGSSLMODE
  value: {{ ternary "require" "prefer" (eq (toString (ternary $m.ssl (include "drill.db.ssl" .) (and (hasKey $m "ssl") (ne (toString $m.ssl) "")))) "true") | quote }}
{{- end }}

{{/* ---------- Connections ---------- */}}

{{/* Pods that may hold DB pools at the same time: replicas, plus surge during a rolling update
     (Recreate stops old pods before starting new ones). */}}
{{- define "drill.admin.maxPods" -}}
{{- $replicas := int .Values.admin.replicaCount -}}
{{- $surge := 0 -}}
{{- if eq .Values.admin.updateStrategy.type "RollingUpdate" -}}
{{- $ru := .Values.admin.updateStrategy.rollingUpdate | default (dict) -}}
{{- $s := ternary $ru.maxSurge 1 (hasKey $ru "maxSurge") -}}
{{- if and (kindIs "string" $s) (hasSuffix "%" $s) -}}
{{- $surge = div (add (mul $replicas (int (trimSuffix "%" $s))) 99) 100 -}}
{{- else -}}
{{- $surge = int $s -}}
{{- end -}}
{{- add $replicas $surge -}}
{{- end }}

{{/* Connections required on the main DB server. Hikari keeps pools full. */}}
{{- define "drill.requiredConnections" -}}
{{- $pools := add (int .Values.admin.config.db.maxPoolSize) (int .Values.admin.config.metricsDb.maxPoolSize) -}}
{{- add (mul (int (include "drill.admin.maxPods" .)) $pools) 20 -}}
{{- end }}

{{- define "drill.postgresql.maxConnections" -}}
{{- if eq (toString .Values.postgresql.maxConnections) "auto" -}}
{{- include "drill.requiredConnections" . -}}
{{- else -}}
{{- int .Values.postgresql.maxConnections -}}
{{- end -}}
{{- end }}

{{- define "drill.backup.enabled" -}}
{{- if eq (toString .Values.backup.enabled) "auto" -}}
{{- if .Values.postgresql.enabled }}true{{ end -}}
{{- else if eq (toString .Values.backup.enabled) "true" -}}true
{{- end -}}
{{- end }}

{{/* The hook runs before new manifests are applied: when backup is enabled on an existing
release its PVC does not exist yet, so the Job is skipped for that one upgrade. */}}
{{- define "drill.backup.pvcReady" -}}
{{- if .Values.backup.persistence.existingClaim -}}true
{{- else if lookup "v1" "PersistentVolumeClaim" .Release.Namespace (include "drill.backupName" .) -}}true
{{- end -}}
{{- end }}

{{/* ---------- Deprecated / renamed values ----------
  Chart-owned table, updated when admin renames settings between releases:
    - old: admin.config.etl.workers
      new: admin.config.etl.maxWorkers
      removed: false   # false = still mapped, warning in NOTES; true = install fails with a hint
  Removed keys stay in values.schema.json for one release so the hint is shown instead of a schema error.
*/}}
{{- define "drill.deprecatedKeys" -}}
[]
{{- end }}

{{/* Returns "true" if the dotted path exists in .root */}}
{{- define "drill.hasPath" -}}
{{- $cur := .root -}}
{{- $found := true -}}
{{- range (splitList "." .path) -}}
{{- if and $found (kindIs "map" $cur) (hasKey $cur .) -}}
{{- $cur = index $cur . -}}
{{- else -}}
{{- $found = false -}}
{{- end -}}
{{- end -}}
{{- if $found }}true{{ end -}}
{{- end }}

{{/* List of deprecated keys set by the user: [{old,new,removed}] */}}
{{- define "drill.usedDeprecatedKeys" -}}
{{- $used := list -}}
{{- range (include "drill.deprecatedKeys" . | fromYamlArray) -}}
{{- if include "drill.hasPath" (dict "root" $.Values "path" .old) -}}
{{- $used = append $used . -}}
{{- end -}}
{{- end -}}
{{- toYaml $used -}}
{{- end }}
