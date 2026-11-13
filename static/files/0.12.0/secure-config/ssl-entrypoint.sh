#!/bin/bash
set -e

CERT=/etc/ssl/certs/pg-server.crt
KEY=/etc/ssl/private/pg-server.key

if [ -f /ssl-src/server.crt ] && [ -f /ssl-src/server.key ]; then
  # Use certificates provided by the operator.
  install -m 644 -o postgres -g postgres /ssl-src/server.crt "$CERT"
  install -m 600 -o postgres -g postgres /ssl-src/server.key "$KEY"
else
  # No certificates supplied — generate a self-signed one for this environment.
  echo "ssl-entrypoint: no certificates found in /ssl-src, generating self-signed cert"
  openssl req -new -x509 -days 3650 -nodes \
    -out "$CERT" -keyout "$KEY" \
    -subj "/CN=postgres" 2>/dev/null
  chown postgres:postgres "$CERT" "$KEY"
  chmod 644 "$CERT"
  chmod 600 "$KEY"
fi

exec /usr/local/bin/docker-entrypoint.sh "$@"
