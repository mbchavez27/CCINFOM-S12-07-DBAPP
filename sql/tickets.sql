use laptop_borrowing;

SELECT * FROM tickets;
SELECT * FROM issues;
describe tickets;

-- GET TICKETS
SELECT 
t.ticket_id, 
l.product_name, 
CONCAT(s.first_name, ' ', s.last_name) as full_name,
i.typ e,
i.category,
t.date_opened, 	
t.date_closed
FROM tickets t
INNER JOIN laptops l ON t.laptop_id = l.laptop_id 
INNER JOIN staff s ON t.staff_id = s.staff_id 
INNER JOIN issues i ON t.issue_id = i.issue_id;

-- CREATE TICKETS
INSERT INTO tickets (laptop_id, staff_id, issue_id, description, date_opened) VALUES (?,?,?,?,?);

INSERT INTO tickets (laptop_id, staff_id, issue_id, description, date_opened)
VALUES (1, 11, 17, 'Slow', '2025-07-16');

-- CLOSE TICKETS
UPDATE tickets SET date_closed = ? WHERE ticket_id = ?;

-- DELETE TICKETS 
DELETE FROM tickets WHERE ticket_id = ?;