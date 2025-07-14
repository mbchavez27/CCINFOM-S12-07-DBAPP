use laptop_borrowing;
show tables;

select * from borrow_records;

-- BORROW LAPTOP
INSERT INTO borrow_records (laptop_id, staff_id, customer_id, pickup_date) VALUES (?,?,?,?);

-- RETURN LAPTOP 
UPDATE borrow_records SET return_date = ? WHERE borrow_id = ? AND return_date IS NULL;

