\echo 'Delete and recreate warmup db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE warmup;
CREATE DATABASE warmup;
\connect warmup

\i warmup-schema.sql
\i warmup-seed.sql

\echo 'Delete and recreate warmup_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE warmup_test;
CREATE DATABASE warmup_test;
\connect warmup_test

\i warmup-schema.sql
