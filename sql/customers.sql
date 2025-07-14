-- SQL Script
use laptop_borrowing;
-- GET CUSTOMERS
SELECT * FROM customers; 
-- GET INDIVIDUAL CUSTOMER
SELECT * FROM customers c WHERE c.last_name = ? AND c.first_name = ?;
-- POST CUSTOMERS
INSERT INTO customers (last_name, first_name, type, college_id) values (?, ?, ?, ?);
 
DELETE FROM customers
WHERE customer_id = 18;
-- Sample Input
INSERT INTO customers (last_name, first_name, type, college_id) values ('Chavez', 'Ruiz', 'Student', 'CCS');

