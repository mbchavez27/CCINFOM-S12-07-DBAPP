USE laptop_borrowing;

-- Generate report of currently borrowed laptops
SELECT 
    br.borrow_id,
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.type AS customer_type,
    col.college AS college_name,
    l.laptop_id,
    l.product_name,
    l.product_os,
    l.battery_health,
    s.staff_id,
    CONCAT(s.first_name, ' ', s.last_name) AS assigned_staff,
    br.pickup_date,
    br.return_date
FROM borrow_records br
JOIN customers c ON br.customer_id = c.customer_id
JOIN colleges col ON c.college_id = col.college_id
JOIN laptops l ON br.laptop_id = l.laptop_id
JOIN staff s ON br.staff_id = s.staff_id
WHERE br.return_date IS NULL
ORDER BY br.pickup_date DESC;

-- Generate report of borrowed laptops
SELECT 
    br.borrow_id,
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.type AS customer_type,
    col.college AS college_name,
    l.laptop_id,
    l.product_name,
    l.product_os,
    l.battery_health,
    s.staff_id,
    CONCAT(s.first_name, ' ', s.last_name) AS assigned_staff,
    br.pickup_date,
    br.return_date
FROM borrow_records br
JOIN customers c ON br.customer_id = c.customer_id
JOIN colleges col ON c.college_id = col.college_id
JOIN laptops l ON br.laptop_id = l.laptop_id
JOIN staff s ON br.staff_id = s.staff_id
ORDER BY br.pickup_date DESC;

SELECT * FROM customers;

-- GET CURRENTLY BORROWING
SELECT l.product_name, br.pickup_date, br.return_date, c.customer_id as customer_id, CONCAT(c.last_name, ' ', c.first_name) as customer_name
FROM borrow_records br 
INNER JOIN laptops l ON br.laptop_id = l.laptop_id
INNER JOIN customers c ON br.customer_id = c.customer_id
WHERE c.customer_id = 3 AND br.return_date IS NULL;
