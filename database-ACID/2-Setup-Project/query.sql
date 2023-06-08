-- 1.
CREATE DATABASE belajar_acid;

USE belajar_acid;

-- 2.
CREATE TABLE accounts
(
    id      VARCHAR(100) NOT NULL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    balance BIGINT NOT NULL
) ENGINE InnoDB;

SELECT * FROM accounts;