CREATE DATABASE laptop_borrowing;
USE laptop_borrowing;

-- CREATE TABLES
-- Independent Tables (No Foreign Key)
CREATE TABLE laptops (
	laptop_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	product_os VARCHAR(50),
	battery_health INT NOT NULL,
	CONSTRAINT laptop_pk PRIMARY KEY(laptop_id),
	CONSTRAINT chk_battery CHECK(battery_health between 1 and 100),
	CONSTRAINT chk_os CHECK(product_os in ('Windows', 'MacOS', 'Linux'))
);

CREATE TABLE colleges (
	college_id VARCHAR(10) NOT NULL,
	college VARCHAR(50) NOT NULL,
	CONSTRAINT college_pk PRIMARY KEY(college_id)
);

CREATE TABLE staff (
	staff_id INT NOT NULL AUTO_INCREMENT,
	last_name VARCHAR(255) NOT NULL,
	first_name VARCHAR(255) NOT NULL,
	contact VARCHAR(20) NOT NULL,
    CONSTRAINT unique_staff_name UNIQUE (last_name, first_name), 
	CONSTRAINT staff_pk PRIMARY KEY(staff_id)
);

CREATE TABLE issues (
    issue_id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(50) NOT NULL,
    category VARCHAR(255) NOT NULL,
    CONSTRAINT issues_pk PRIMARY KEY(issue_id)
);

-- Has Foreign Keys for Laptop, Staff, Issues
CREATE TABLE tickets (
	ticket_id INT NOT NULL AUTO_INCREMENT,
	laptop_id INT NOT NULL,
	staff_id INT NOT NULL,
	issue_id INT NOT NULL,
	description VARCHAR(255) NOT NULL,
	date_opened DATE NOT NULL,
	date_closed DATE,
	CONSTRAINT chk_date_closed CHECK(date_closed IS NULL OR DATE_closed >= DATE_opened),
	CONSTRAINT ticket_pk PRIMARY KEY(ticket_id),
	CONSTRAINT ticket_fk1 FOREIGN KEY(laptop_id) REFERENCES laptops(laptop_id),
	CONSTRAINT ticket_fk2 FOREIGN KEY(staff_id) REFERENCES staff(staff_id),
	CONSTRAINT ticket_fk3 FOREIGN KEY(issue_id) REFERENCES issues(issue_id)
);

-- Create Customers 
CREATE TABLE customers (
	customer_id INT NOT NULL AUTO_INCREMENT,
	last_name VARCHAR(255) NOT NULL,
	first_name VARCHAR(255) NOT NULL,
	type VARCHAR(50) NOT NULL,
	college_id VARCHAR(10) NOT NULL,
    CONSTRAINT unique_customer_name UNIQUE (last_name, first_name),
	CONSTRAINT chk_type CHECK(type IN ('Student', 'Faculty')),
	CONSTRAINT customer_pk PRIMARY KEY(customer_id),
	CONSTRAINT college_fk FOREIGN KEY(college_id) REFERENCES colleges(college_id)
);

CREATE TABLE borrow_records (
	borrow_id INT NOT NULL AUTO_INCREMENT,
	laptop_id INT NOT NULL,
	staff_id INT NOT NULL,
	customer_id INT NOT NULL,
	pickup_date DATE NOT NULL,
	return_date DATE,
	CONSTRAINT chk_return_date CHECK(return_date IS NULL OR return_date >= pickup_date),
    CONSTRAINT borrow_record_pk PRIMARY KEY(borrow_id),
	CONSTRAINT borrow_record_fk1 FOREIGN KEY(laptop_id) REFERENCES laptops(laptop_id),
	CONSTRAINT borrow_record_fk2 FOREIGN KEY(staff_id) REFERENCES staff(staff_id),
	CONSTRAINT borrow_record_fk3 FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE penalties (
	penalty_id INT NOT NULL AUTO_INCREMENT,
	borrow_id INT NOT NULL,
	customer_id INT NOT NULL,
	ticket_id INT,
	date_imposed DATE NOT NULL,
	date_lifted DATE,
	CONSTRAINT chk_lift_date CHECK(date_lifted IS NULL OR DATE_lifted >= DATE_imposed),
    CONSTRAINT penalties_pk PRIMARY KEY(penalty_id),
	CONSTRAINT penalties_fk1 FOREIGN KEY(borrow_id) REFERENCES borrow_records(borrow_id),
	CONSTRAINT penalties_fk2 FOREIGN KEY(customer_id) REFERENCES customers(customer_id),
	CONSTRAINT penalties_fk3 FOREIGN KEY(ticket_id) REFERENCES tickets(ticket_id)
);