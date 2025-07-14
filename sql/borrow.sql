show tables;
describe borrow_records;
SELECT * FROM borrow_records;

-- GET RANDOM STAFF
SELECT staff_id
FROM staff
ORDER BY RAND()
LIMIT 1;

-- BORROW LAPTOP
INSERT INTO borrow_records (laptop_id, staff_id, customer_id, pickup_date) VALUES (?,?,?,?);
