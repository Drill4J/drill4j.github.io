# docker-compose-secure.yml

Hardened version of the standard Drill4J Docker Compose setup.
Adds SSL/TLS encryption and a least-privilege PostgreSQL user.

## What it does automatically on first start

1. Generates a self-signed SSL certificate (TLSv1.3) inside the container
2. Creates `drill` and `drill-metrics` databases
3. Revokes dangerous default privileges from the PostgreSQL `PUBLIC` role
4. Creates a dedicated `drill` role with minimal permissions (no superuser)

## Quick start

**1. Copy `.env.example` to `.env` and set strong, unique passwords:**

```
POSTGRES_PASSWORD=<strong password>
DRILL_ADMIN_DB_PASSWORD=<strong password>
```

**2. Start:**

```bash
docker compose -f docker-compose-secure.yml up -d
```

> **Note:** Init scripts run only once on an empty volume. This is not an in-place upgrade of an existing database. To initialize a fresh database again, `docker compose -f docker-compose-secure.yml down -v` removes the volume and **deletes all stored data**.

TLS applies to PostgreSQL connections only; the UI and Admin Backend still use HTTP.

## Using your own SSL certificate

Place `server.crt` and `server.key` in the `ssl/` directory before starting:

```bash
mkdir ssl
openssl req -new -x509 -days 3650 -nodes \
  -out ssl/server.crt -keyout ssl/server.key \
  -subj "/CN=postgres"
```

If `ssl/` is empty or missing, a certificate is generated automatically.
