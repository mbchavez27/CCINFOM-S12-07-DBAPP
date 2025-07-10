CREATE DATABASE laptop_borrowing;
USE laptop_borrowing;

CREATE TABLE laptops (
	laptop_id int NOT NULL AUTO_INCREMENT,
	product_name varchar(255) NOT NULL,
	product_os varchar(50),
	battery_health int NOT NULL,
	CONSTRAINT laptop_pk PRIMARY KEY(laptop_id),
	CONSTRAINT chk_battery CHECK(battery_health between 1 and 100),
	CONSTRAINT chk_os CHECK(product_os in ('Windows', 'MacOS', 'Linux'))
);

CREATE TABLE customers (
	customer_id int NOT NULL AUTO_INCREMENT,
	last_name varchar(255) NOT NULL,
	first_name varchar(255) NOT NULL,
	type varchar(50) NOT NULL,
	college_id int NOT NULL,
	CONSTRAINT customer_pk PRIMARY KEY(customer_id),
	CONSTRAINT college_fk FOREIGN KEY(college_id),
	CONSTRAINT chk_type CHECK(type IN ('Student', 'Faculty')),
);

CREATE TABLE colleges (
	college_id int NOT NULL AUTO_INCREMENT,
	college varchar(50) NOT NULL,
	CONSTRAINT college_pk PRIMARY KEY(college_id),
);

CREATE TABLE staff (
	staff_id int NOT NULL AUTO_INCREMENT,
	last_name varchar(255) NOT NULL,
	first_name varchar(255) NOT NULL,
	role varchar(50),
	contact varchar(20) NOT NULL,
	constraint staff_pk PRIMARY KEY(staff_id)
);

CREATE TABLE tickets (
	ticket_id int NOT NULL AUTO_INCREMENT,
	laptop_id int NOT NULL,
	staff_id int NOT NULL,
	customer_id int NOT NULL,
	issue_type varchar(50) NOT NULL,
	description varchar(255) NOT NULL,
	date_opened date NOT NULL,
	date_closed date,
	CONSTRAINT chk_issue_type CHECK(issue_type IN ('Software', 'Hardware', 'Other')),
	CONSTRAINT chk_date_closed CHECK(date_closed IS NULL OR date_closed >= date_opened),
	CONSTRAINT ticket_pk PRIMARY KEY(ticket_id),
	CONSTRAINT ticket_fk1 FOREIGN KEY(laptop_id) REFERENCES laptops(laptop_id),
	CONSTRAINT ticket_fk2 FOREIGN KEY(staff_id) REFERENCES staff(staff_id),
	CONSTRAINT ticket_fk3 FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);

create table borrow_records (
	borrow_id int NOT NULL AUTO_INCREMENT,
	laptop_id int NOT NULL,
	staff_id int NOT NULL,
	customer_id int NOT NULL,
	pickup_date date NOT NULL,
	return_date date,
	CONSTRAINT chk_return_date CHECK(return_date IS NULL OR return_date >= pickup_date),
    CONSTRAINT borrow_record_pk PRIMARY KEY(borrow_id),
	CONSTRAINT borrow_record_fk1 FOREIGN KEY(laptop_id) REFERENCES laptops(laptop_id),
	CONSTRAINT borrow_record_fk2 FOREIGN KEY(staff_id) REFERENCES staff(staff_id),
	CONSTRAINT borrow_record_fk3 FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);
