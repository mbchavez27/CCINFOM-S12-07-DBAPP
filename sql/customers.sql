#SQL Script
select * from customers; #Get customers
INSERT INTO customers (last_name, first_name, type, college_id) values (?, ?, ?, ?); #Post Customers
 
#Sample Input
INSERT INTO customers (last_name, first_name, type, college_id) values ('Chavez', 'Ruiz', 'Student', 'CCS');
