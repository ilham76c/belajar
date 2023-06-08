-- 1. Transaksi Sukses
START TRANSACTION;

INSERT INTO accounts (id, name, balance)
VALUES ('ilham76c', 'MOH. ILHAM B.', 8000000);

INSERT INTO accounts (id, name, balance)
VALUES ('bobay97', 'BOBAY APRILIO', 5000000);

COMMIT;

-- 2.
SELECT * FROM accounts;

-- 3. Transaksi Rollback
START TRANSACTION;

DELETE FROM accounts WHERE id = 'ilham76c';

DELETE FROM accounts WHERE id = 'bobay97';

ROLLBACK;