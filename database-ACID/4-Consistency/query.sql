-- 1. Invalid Update
START TRANSACTION;

UPDATE 
    accounts
SET 
    name = null
WHERE 
    id = 'ilham76c';

COMMIT;

SELECT * FROM accounts;