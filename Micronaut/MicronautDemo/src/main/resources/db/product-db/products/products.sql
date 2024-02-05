--liquibase formatted sql

--changeset manish:create-products-table
CREATE TABLE products (
    id VARCHAR(256) PRIMARY KEY,
    name VARCHAR(256) NOT NULL
) collate = utf8mb4_unicode_ci;