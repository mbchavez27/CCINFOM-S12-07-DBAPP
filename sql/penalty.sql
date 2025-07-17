use laptop_borrowing;

SELECT * FROM penalties;


-- CHECK IF CURRENLTY HAS PENALTY 
SELECT penalty_id, date_imposed, date_lifted FROM penalties WHERE customer_id = 2 AND date_lifted IS NULL;


-- GET ALL PENALTIES
SELECT 
	p.penalty_id, 
	br.borrow_id, 
	c.customer_id, CONCAT(c.first_name, ' ', c.last_name) as customer_name, 
	l.product_name, 
	CONCAT(s.first_name, ' ', s.last_name) as staff_name, 
    i.type, 
    i.category,
    t.description,
    p.date_imposed, 
    p.date_lifted 
FROM penalties p 
INNER JOIN tickets t ON p.ticket_id = t.ticket_id 
INNER JOIN borrow_records br ON p.borrow_id = br.borrow_id 
INNER JOIN customers c ON p.customer_id = c.customer_id
INNER JOIN staff s ON t.staff_id = s.staff_id 
INNER JOIN issues i ON t.issue_id = i.issue_id
INNER JOIN laptops l ON t.laptop_id = l.laptop_id;  



-- INSERT PENALTIES 
INSERT penalties (borrow_id, customer_id, ticket_id, date_imposed) VALUES (?,?,?,?);

-- DELETE PENALTIES 
DELETE FROM penalties WHERE penalty_id = ?;

-- RESOLVE PENALTIES 
UPDATE penalties SET date_lifted = ? WHERE penalty_id = ?;
