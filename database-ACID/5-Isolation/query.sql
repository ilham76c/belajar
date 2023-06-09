-- 1. SQL Transfer
START TRANSACTION;

SELECT * FROM accounts WHERE id IN('ilham76c', 'bobay97') FOR UPDATE;

UPDATE accounts SET balance = balance + 1500000 WHERE id = 'ilham76c';

UPDATE accounts SET balance = balance - 1500000 WHERE id = 'bobay97';

COMMIT;
