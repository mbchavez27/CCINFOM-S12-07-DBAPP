-- SQL SCRIPT
SELECT * FROM staff;

-- GET RANDOM STAFF
SELECT staff_id
FROM staff
ORDER BY RAND()
LIMIT 1;

-- CREATE TEMPLATES
INSERT INTO staff (last_name, first_name, role, contact) values (?, ?, ?, ?); 
