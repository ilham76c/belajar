-- 1. Transfer Gagal
SELECT * FROM accounts;

START TRANSACTION;

SELECT * FROM accounts WHERE id in('ilham76c', 'bobay97') FOR UPDATE;

UPDATE accounts SET balance = balance + 500000 WHERE id = 'bobay97';

SELECT * FROM accounts;

-- misal selanjutnya mysql-nya shutdown/mati

-- lalu nyalakan lagi mysql-nya
-- kemudian select data, data di table tidak akan berubah dan kembali ke state awal karena query di atas belum di commit
SELECT * FROM accounts;

UPDATE accounts SET balance = balance - 500000 WHERE id = 'ilham76c';

SELECT * FROM accounts;

COMMIT;