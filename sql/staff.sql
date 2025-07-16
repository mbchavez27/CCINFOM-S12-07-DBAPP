-- SQL SCRIPT
SELECT * FROM staff;

-- GET RANDOM STAFF
SELECT staff_id
FROM staff
ORDER BY RAND()
LIMIT 1;

-- CREATE TEMPLATES
INSERT INTO staff (last_name, first_name, role, contact) values (?, ?, ?, ?); 

-- STAFF REPORT: Top Staff with Most Tickets Assigned Per Month
SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS staff_name,
    DATE_FORMAT(t.date_opened, '%Y-%m') AS ticket_month,
    COUNT(t.ticket_id) AS ticket_count
FROM tickets t
JOIN staff s ON t.staff_id = s.staff_id
GROUP BY s.staff_id, ticket_month
ORDER BY ticket_month DESC, ticket_count DESC;

-- STAFF REPORT: Monthly Average Daily Ticket Assignment per Staff
SELECT 
    s.staff_id,
    CONCAT(s.first_name, ' ', s.last_name) AS staff_name,
    DATE_FORMAT(t.date_opened, '%Y-%m') AS month,
    COUNT(t.ticket_id) / COUNT(DISTINCT t.date_opened) AS avg_daily_tickets
FROM tickets t
JOIN staff s ON t.staff_id = s.staff_id
GROUP BY s.staff_id, month
ORDER BY month DESC, avg_daily_tickets DESC;

