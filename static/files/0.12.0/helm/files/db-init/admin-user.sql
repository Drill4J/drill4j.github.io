-- Least-privilege login role used by Drill4J admin instead of the superuser
\getenv user ADMIN_DB_USER
\getenv password ADMIN_DB_PASSWORD
\getenv db DB_NAME
\getenv metrics_db METRICS_DB_NAME

SET log_statement = 'none';
SET log_min_duration_statement = -1;
SET log_min_error_statement = 'panic';

SELECT format('CREATE ROLE %I', :'user')
WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = :'user') \gexec

ALTER ROLE :"user" WITH
    LOGIN
    PASSWORD :'password'
    NOSUPERUSER
    NOCREATEDB
    NOCREATEROLE
    NOINHERIT
    NOREPLICATION
    NOBYPASSRLS;

GRANT CONNECT, CREATE ON DATABASE :"db" TO :"user";
GRANT CONNECT, CREATE ON DATABASE :"metrics_db" TO :"user";
