-- =============================================
-- Revoke function execution from PUBLIC
-- =============================================
REVOKE EXECUTE ON FUNCTION pg_cancel_backend(integer) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_terminate_backend(integer,bigint) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_create_logical_replication_slot(name, name, boolean, boolean, boolean) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_create_physical_replication_slot(name, boolean, boolean) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION pg_drop_replication_slot(name) FROM PUBLIC;

-- =============================================
-- Revoke catalog write access
-- =============================================
REVOKE UPDATE ON pg_catalog.pg_settings FROM PUBLIC;

-- =============================================
-- Revoke sensitive catalog read access
-- =============================================
REVOKE SELECT ON pg_catalog.pg_roles FROM PUBLIC;
REVOKE SELECT ON pg_catalog.pg_user FROM PUBLIC;
REVOKE SELECT ON pg_catalog.pg_user_mappings FROM PUBLIC;
REVOKE SELECT ON pg_catalog.pg_shadow FROM PUBLIC;
REVOKE SELECT ON pg_catalog.pg_authid FROM PUBLIC;
REVOKE SELECT ON information_schema.role_table_grants FROM PUBLIC;
REVOKE SELECT ON information_schema.role_routine_grants FROM PUBLIC;

-- =============================================
-- Restrict PUBLIC schema usage
-- =============================================
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
