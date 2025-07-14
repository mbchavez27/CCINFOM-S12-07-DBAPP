-- SQL SCRIPT
SELECT * FROM staff;

-- ADD PREFILLED VALUES FOR STAFF 

-- CREATE TEMPLATES
INSERT INTO staff (last_name, first_name, role, contact) values (?, ?, ?, ?); 
