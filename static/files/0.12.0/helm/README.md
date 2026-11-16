# Drill4J Helm chart

This chart deploys the Drill4J admin API, UI, and optionally PostgreSQL 17. The UI serves on port 8080 and proxies `/api/` to admin on port 8090. Chart and Drill4J release versions follow the same versioning.

## Deployment

Run Helm commands from the repository's `helm` directory. Choose the deployment guide that matches your environment; `values-local.yaml` is for development only.

### Kubernetes cluster

Use a cluster context with permission to create workloads, services, ingresses, secrets, and persistent volume claims. The cluster must have an Ingress controller and a default StorageClass (or set `postgresql.persistence.storageClass` and `backup.persistence.storageClass`). Configure DNS for the hostname to point to the Ingress controller.

Create a namespace and, if TLS is not managed by cert-manager, create a TLS Secret in that namespace:

```bash
kubectl config current-context
kubectl create namespace drill --dry-run=client -o yaml | kubectl apply -f -
kubectl create secret tls drill-tls -n drill --cert=path/to/tls.crt --key=path/to/tls.key
```

Install the chart, replacing the example hostname and `nginx` with values for your cluster:

```bash
helm install drill ./drill -n drill \
  -f drill/values-prod.yaml \
  --set ingress.host=drill.example.com \
  --set-string 'ingress.tls[0].hosts[0]=drill.example.com' \
  --set ingress.className=nginx \
  --wait
```

Replace the example hostname in both `ingress.host` and the TLS host override. Replace `nginx` with the Ingress class used by your cluster. If cert-manager provisions TLS, omit the `kubectl create secret` command, configure the issuer using Ingress annotations, and ensure it provisions the configured TLS Secret. Otherwise, the `drill-tls` Secret configured in `values-prod.yaml` must exist in the `drill` namespace. Open `https://drill.example.com` and sign in with the default credentials (`admin` / `admin`); change the password after signing in. The API is at `/api`, and Swagger is at `/swagger`. Use the install notes' `helm test` command to check the deployment.

### Minikube

For local development, start Minikube with host port mappings for the chart's NodePort services, then install the local values:

```bash
minikube start --driver=docker --ports=8090:30090,8091:30091
helm install drill ./drill -f drill/values-local.yaml --wait
```

Open the UI at `http://localhost:8091` and the API at `http://localhost:8090` (Swagger: `/swagger`). The default login is `admin` / `admin`; change the password after signing in. If Minikube was started without the port mappings, use the `kubectl port-forward` commands printed in the chart's install notes.

## Configuration

Choose a values file and override settings with additional `-f` files or `--set`:

| File | Purpose |
|---|---|
| `drill/values.yaml` | Default configuration |
| `drill/values-local.yaml` | Minikube development/testing; reduced resources and storage |
| `drill/values-local-secure.yaml` | `values-local.yaml` with hardened built-in PostgreSQL (see [Secure PostgreSQL](#secure-postgresql)) |
| `drill/values-prod.yaml` | Production Kubernetes; Ingress, TLS, multiple replicas, and larger storage. Adjust resources and persistence for your cluster |

Important settings:

| Setting | Purpose |
|---|---|
| `exposure.mode` | `local` exposes services via NodePort; `ingress` routes `/` to UI and `/api` and `/swagger` to admin |
| `admin.image.tag`, `ui.image.tag` | Set admin and UI image versions independently |
| `ui.basePath` | Optional UI prefix, e.g. `/drill`; use with UI `0.12.1-alpha.2` or later |
| `admin.enabled`, `ui.enabled`, `postgresql.enabled` | Enable or disable components |
| `admin.replicaCount` | Admin replicas; replicas share the JWT signing secret |
| `admin.jwt.secret`, `admin.jwt.existingSecret` | Persist the JWT signing key across restarts |
| `postgresql.persistence.*` | Configure database storage |
| `postgresql.tls.*`, `postgresql.adminUser.*`, `postgresql.hardenPublicRole` | Harden the built-in PostgreSQL (see [Secure PostgreSQL](#secure-postgresql)) |
| `backup.enabled` | Disabled by default; `true` enables backups explicitly, `auto` enables them for the bundled database |

Values are schema-validated; unknown keys and invalid values are rejected. See `values.yaml` for the full configuration.

### External PostgreSQL

Create a Kubernetes Secret for the database password in the release namespace, then install with production values:

```bash
kubectl create secret generic drill-db -n drill --from-literal=db-password='<password>'
helm install drill ./drill -n drill -f drill/values-prod.yaml \
  --set postgresql.enabled=false \
  --set externalDatabase.host=pg.example.com \
  --set externalDatabase.username=drill \
  --set externalDatabase.existingSecret=drill-db
```

Admin creates the configured databases if missing; the database user therefore needs `CREATE DATABASE`, or create them in advance and set `admin.dbInit.enabled=false`. Ensure the server supports the connection count printed in the install notes. If you explicitly enable backups, verify backup storage and ensure the configured `pg_dump` image is compatible with the external server.

### Secure PostgreSQL

These settings apply to the built-in PostgreSQL and are all disabled by default:

```bash
minikube start --driver=docker --ports=8090:30090,8091:30091
helm install drill ./drill -f drill/values-local-secure.yaml --wait
```

| Setting | Effect |
|---|---|
| `postgresql.tls.enabled` | PostgreSQL runs with `ssl=on` and accepts only TLS connections from other pods (`hostssl` in `pg_hba.conf`); admin and the chart's jobs connect with SSL. A self-signed certificate is generated at pod start unless `postgresql.tls.existingSecret` names a `kubernetes.io/tls` Secret with `tls.crt` and `tls.key` |
| `postgresql.adminUser.enabled` | Admin connects as a dedicated role (`postgresql.adminUser.username`, default `drill`) with `NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOREPLICATION NOBYPASSRLS` and only `CONNECT, CREATE` on the Drill4J databases. The superuser `postgresql.auth.username` is used only by the database init container and backups. The role password is taken from `postgresql.adminUser.password`, or generated into the chart Secret under `postgresql.adminUser.passwordKey` (with `postgresql.auth.existingSecret`, that Secret must contain this key) |
| `postgresql.hardenPublicRole` | Revokes default `PUBLIC` privileges (server-information functions and views, `public` schema) in both Drill4J databases, as `secure-config/db-init/02-harden-public-role.sql` does |

Enable `postgresql.adminUser.enabled` on a fresh installation only: tables already created by the superuser are not accessible to the new role.

### Ingress

Install an Ingress controller separately, then set the host and class:

```bash
helm install drill ./drill -n drill -f drill/values-prod.yaml \
  --set ingress.host=drill.example.com \
  --set ingress.className=nginx
```

The chart routes `/api` to admin; this route is required for agents sending data from outside the cluster. Optional controller examples are in `examples/values-ingress-nginx.yaml` and `examples/values-ingress-traefik.yaml`. To serve the UI under a prefix, set `ui.basePath=/drill`; no ingress rewrite is needed.

## Upgrade and rollback

```bash
helm upgrade drill ./drill -n drill -f drill/values-prod.yaml --wait
helm rollback drill <REVISION> -n drill --wait
```

Use the same values file and overrides used for installation (for Minikube, use `drill/values-local.yaml` instead of `drill/values-prod.yaml`).

Backups are disabled by default, including in `values-local.yaml` and `values-prod.yaml`. Disabling backups does not delete an existing backup PVC because it has `helm.sh/resource-policy: keep`.

When backups are explicitly enabled (`true`, or `auto` for the bundled database), a hook backs up both databases to the backup PVC before upgrade or rollback. A backup failure stops the operation. Backups are retained according to `backup.keep`. Use a StorageClass with `volumeBindingMode: Immediate` for `backup.persistence.storageClass`, or a pre-bound PVC via `backup.persistence.existingClaim`: the backup Job does not run during installation, so `WaitForFirstConsumer` can leave the backup PVC pending and block `helm install --wait`. When enabling backups on an existing release, the first upgrade creates the PVC and is not itself backed up; enable backups in a separate upgrade before changing versions.

Admin applies database migrations at startup. The default `admin.updateStrategy.type: Recreate` stops old admin pods before starting new ones, so the API is briefly unavailable during upgrades, environment changes, and rollbacks. UI updates without downtime. Database migrations may not be reversible: if the previous admin version cannot use the migrated schema, restore a backup from before the upgrade before rolling back:

```bash
drill/scripts/restore.sh drill -n drill                  # list backups
drill/scripts/restore.sh drill <backup-timestamp> -n drill
helm rollback drill <REVISION> -n drill --wait
```

Restoring loses data written after that backup. The restore script prompts for confirmation.

The generated database password is stored in a Kubernetes Secret. Neither that Secret nor the database PVC is removed by `helm uninstall`; reinstalling with the same release name reuses them. Changing the Secret alone does not change the password in an initialized database.

## Version notes

- **0.12.1-alpha.2:** UI supports `ui.basePath` directly. Use an ingress path with `pathType: Prefix` and remove older rewrite or prefix-stripping middleware. The value must be empty or a path such as `/drill`, with no trailing slash.
- **0.12.0:** Initial chart release. Admin `0.11.x` to `0.12.0` migration was tested. The first upgrade to this chart version also changes the bundled PostgreSQL `max_connections` calculation and restarts PostgreSQL.

## Limitations

- OpenShift arbitrary-UID execution is not supported.
- PostgreSQL major-version upgrades (for example, 17 to 18) require a separate dump/restore; the chart does not perform them.
