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
	CONSTRAINT chk_date_closed CHECK(date_closed IS NULL OR date_closed >= date_opened),
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

-- SHOW TABLES
SHOW TABLES;

-- SAMPLE DATA
INSERT INTO colleges (college_id, college) VALUES 
('CCS', 'College of Computer Studies'),
('COB', 'College of Business'),
('CLA', 'College of Liberal Arts'),
('GCOE', 'Gokongwei College of Engineering'),
('SOE', 'School of Economics');

INSERT INTO issues (type, category) VALUES 
('Hardware', 'Battery not charging'),
('Software', 'OS not booting'),
('Hardware', 'Keyboard malfunction'),
('Software', 'System crash on update'),
('Hardware', 'Screen flickering'),
('Software', 'Driver not installed');

INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Spectre x360', 'Windows', 85);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell XPS 13', 'Windows', 92);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro 14"', 'MacOS', 88);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ROG Zephyrus', 'Windows', 76);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Swift 3', 'Windows', 67);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Air M2', 'MacOS', 94);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo ThinkPad X1', 'Linux', 89);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Envy 13', 'Windows', 81);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus VivoBook S14', 'Windows', 72);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell Inspiron 15', 'Windows', 77);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo Legion 5', 'Windows', 83);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Predator Helios', 'Windows', 79);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro 13"', 'MacOS', 90);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Pavilion x360', 'Windows', 74);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell Latitude 7420', 'Windows', 84);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ZenBook 13', 'Linux', 88);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Aspire 5', 'Windows', 66);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Air M1', 'MacOS', 91);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo Yoga 9i', 'Windows', 86);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP EliteBook 840', 'Windows', 75);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell G15', 'Windows', 82);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus TUF Gaming F15', 'Windows', 78);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro 16"', 'MacOS', 87);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo IdeaPad Flex 5', 'Windows', 73);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Chromebook Spin 713', 'Linux', 69);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Omen 16', 'Windows', 80);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell Alienware m15', 'Windows', 76);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Air 13"', 'MacOS', 89);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ROG Flow X13', 'Windows', 85);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo ThinkBook 14', 'Linux', 70);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Nitro 5', 'Windows', 77);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP ZBook Firefly', 'Windows', 82);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell Precision 5550', 'Windows', 90);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro M3', 'MacOS', 95);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ExpertBook B9', 'Linux', 83);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo ThinkPad T14', 'Windows', 79);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP ProBook 450', 'Windows', 68);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell Vostro 15', 'Windows', 72);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer TravelMate P2', 'Windows', 74);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Air M3', 'MacOS', 92);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus Chromebook Flip', 'Linux', 67);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo Legion Slim 7', 'Windows', 84);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Chromebook 14', 'Linux', 71);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell XPS 15', 'Windows', 86);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Enduro Urban N3', 'Windows', 69);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro 15"', 'MacOS', 88);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ROG Strix G17', 'Windows', 79);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo Yoga Slim 7', 'Windows', 80);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Stream 11', 'Windows', 65);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell Inspiron 14 2-in-1', 'Windows', 77);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Swift X', 'Windows', 83);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Air Retina', 'MacOS', 90);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ZenBook Duo', 'Windows', 84);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo Chromebook Duet', 'Linux', 66);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Spectre Folio', 'Windows', 82);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell Latitude 3520', 'Windows', 73);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Chromebook 514', 'Linux', 68);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro M2 Max', 'MacOS', 96);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ProArt StudioBook', 'Windows', 85);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo ThinkPad L13', 'Windows', 78);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Elite Dragonfly', 'Windows', 91);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell XPS 17', 'Windows', 88);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer ConceptD 7', 'Windows', 87);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro M1 Max', 'MacOS', 94);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus ROG Zephyrus G14', 'Windows', 89);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo ThinkPad P15', 'Windows', 83);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('HP Pavilion Gaming 15', 'Windows', 75);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Dell G3 15', 'Windows', 81);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Acer Aspire 7', 'Windows', 70);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('MacBook Pro 15" Touch Bar', 'MacOS', 89);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Asus Chromebook CX5', 'Linux', 74);
INSERT INTO laptops (product_name, product_os, battery_health) VALUES ('Lenovo ThinkPad E14', 'Windows', 78);

INSERT INTO staff (last_name, first_name, contact) VALUES
('Schuster', 'Janet', '0923-735-6173'),
('Becker', 'Tracy', '0918-267-4089'),
('Boyle', 'Derrick', '0920-588-9567'),
('Barton', 'Claudia', '0908-743-7813'),
('Carroll', 'Luis', '0917-338-6831');

INSERT INTO customers (last_name, first_name, type, college_id) VALUES
('Montoya', 'Olivia', 'Student', 'GCOE'),
('Mcconnell', 'Liam', 'Faculty', 'CCS'),
('Hooper', 'Abigail', 'Student', 'COB'),
('Kirk', 'Lucas', 'Faculty', 'CLA'),
('Allison', 'Ella', 'Student', 'SOE'),
('Navarro', 'Enzo', 'Student', 'CCS'),
('Yap', 'Isla', 'Faculty', 'COB'),
('Delos Reyes', 'Noah', 'Student', 'GCOE'),
('Lee', 'Sophia', 'Student', 'CLA'),
('Rodriguez', 'Ethan', 'Faculty', 'SOE'),
('Villanueva', 'Maya', 'Student', 'CCS'),
('Chan', 'Caleb', 'Faculty', 'GCOE'),
('Santiago', 'Zoe', 'Student', 'COB'),
('Fernandez', 'Sebastian', 'Student', 'CLA'),
('Gutierrez', 'Ava', 'Faculty', 'SOE'),
('Lim', 'Isaac', 'Student', 'CCS'),
('Ramos', 'Chloe', 'Faculty', 'GCOE'),
('Torres', 'Levi', 'Student', 'COB'),
('Cruz', 'Amara', 'Faculty', 'CLA'),
('Dela Peña', 'Elijah', 'Student', 'SOE');


INSERT INTO tickets (laptop_id, staff_id, issue_id, description, date_opened, date_closed) VALUES
(3, 1, 1, 'Battery drains quickly even when idle.', '2025-03-01', '2025-03-05'),
(5, 2, 2, 'Laptop stuck on OS loading screen.', '2025-03-02', '2025-03-06'),
(8, 3, 3, 'Keyboard keys intermittently stop working.', '2025-03-03', '2025-03-07'),
(12, 4, 4, 'System crashes after automatic updates.', '2025-03-04', NULL),
(15, 5, 5, 'Screen shows random flickers.', '2025-03-05', '2025-03-10'),
(17, 1, 6, 'No audio driver installed.', '2025-03-06', NULL),
(20, 2, 1, 'Battery doesn’t charge beyond 30%.', '2025-03-07', '2025-03-11'),
(22, 3, 2, 'OS boot loop issue encountered.', '2025-03-08', '2025-03-12'),
(25, 4, 3, 'Random typing behavior on keyboard.', '2025-03-09', NULL),
(27, 5, 4, 'Frequent system crashes on startup.', '2025-03-10', '2025-03-13'),
(30, 1, 5, 'Horizontal flickers while working on docs.', '2025-03-11', '2025-03-14'),
(33, 2, 6, 'Missing video driver after reinstall.', '2025-03-12', NULL),
(35, 3, 1, 'Battery not detected in BIOS.', '2025-03-13', NULL),
(38, 4, 2, 'Stuck in black screen after update.', '2025-03-14', '2025-03-18'),
(40, 5, 3, 'Keyboard types multiple characters.', '2025-03-15', '2025-03-20'),
(42, 1, 4, 'OS crashes when opening browser.', '2025-03-16', NULL),
(45, 2, 5, 'Screen dims randomly.', '2025-03-17', '2025-03-21'),
(47, 3, 6, 'Driver not recognized after update.', '2025-03-18', NULL),
(50, 4, 1, 'Laptop battery inflated.', '2025-03-19', '2025-03-24'),
(52, 5, 2, 'Windows fails to boot after update.', '2025-03-20', NULL),
(55, 1, 3, 'Some keyboard keys completely unresponsive.', '2025-03-21', '2025-03-26'),
(57, 2, 4, 'Crash occurs after sleep mode.', '2025-03-22', NULL),
(60, 3, 5, 'Screen goes black during Zoom meetings.', '2025-03-23', '2025-03-27'),
(62, 4, 6, 'WiFi driver not present in Device Manager.', '2025-03-24', NULL),
(65, 5, 1, 'Battery health dropped to 40% in 3 months.', '2025-03-25', '2025-03-30'),
(67, 1, 2, 'Blue screen after update.', '2025-03-26', NULL),
(69, 2, 3, 'Certain keys respond late.', '2025-03-27', '2025-03-31'),
(70, 3, 4, 'Laptop freezes during OS boot.', '2025-03-28', NULL),
(28, 4, 5, 'Occasional lines on the screen.', '2025-03-29', NULL),
(11, 5, 6, 'Audio driver missing after update.', '2025-03-30', '2025-04-02');


select * from borrow_records where laptop_id = 27 AND staff_id = 1 AND customer_id = 7;
INSERT INTO borrow_records (laptop_id, staff_id, customer_id, pickup_date, return_date) VALUES
(5, 2, 8, '2025-01-10', '2025-01-15'),
(12, 3, 4, '2025-02-01', NULL),
(27, 1, 7, '2024-12-15', '2025-01-10'), -- Late return
(3, 5, 12, '2025-03-03', '2025-03-05'),
(10, 2, 2, '2025-02-12', '2025-02-14'),
(18, 4, 16, '2025-01-05', '2025-01-20'),
(7, 1, 6, '2025-02-01', NULL),
(22, 2, 19, '2025-02-20', '2025-02-28'),
(29, 3, 1, '2025-01-22', '2025-01-27'),
(14, 5, 10, '2025-01-30', '2025-02-02'),
(8, 1, 5, '2024-11-15', '2024-11-20'),
(35, 2, 13, '2024-12-01', NULL),
(6, 3, 9, '2025-02-10', '2025-02-15'),
(17, 4, 3, '2025-03-01', '2025-03-07'),
(24, 5, 14, '2025-03-10', NULL),
(2, 2, 20, '2025-03-13', '2025-03-20'),
(33, 3, 18, '2025-01-19', '2025-01-21'),
(11, 4, 11, '2025-01-05', NULL),
(20, 1, 17, '2024-12-10', '2025-01-02'), -- Late return
(26, 2, 15, '2025-02-25', '2025-03-05'),
(1, 3, 6, '2025-02-02', '2025-02-04'),
(4, 4, 9, '2024-12-20', '2025-01-01'), -- Late return
(30, 5, 8, '2025-03-15', NULL),
(13, 1, 7, '2025-01-08', '2025-01-13'),
(19, 2, 4, '2024-11-05', '2024-11-10'),
(9, 3, 10, '2025-01-25', NULL),
(32, 4, 2, '2024-12-18', '2024-12-22'),
(15, 5, 19, '2025-03-01', NULL),
(31, 1, 20, '2025-02-10', '2025-02-20'),
(21, 2, 1, '2025-03-05', NULL),
(28, 3, 5, '2025-02-14', '2025-02-18'),
(16, 4, 14, '2025-01-09', '2025-01-11'),
(25, 5, 12, '2025-02-27', NULL),
(34, 1, 11, '2025-03-06', '2025-03-09'),
(36, 2, 3, '2025-01-14', '2025-01-20'),
(37, 3, 13, '2025-03-08', NULL),
(23, 4, 15, '2025-02-18', '2025-02-25'),
(38, 5, 16, '2024-11-28', '2024-12-05'),
(39, 1, 18, '2025-01-01', '2025-01-05'),
(40, 2, 17, '2025-03-01', NULL),
(41, 3, 6, '2025-01-12', '2025-01-15'),
(42, 4, 7, '2025-02-07', NULL),
(43, 5, 8, '2025-03-02', '2025-03-06'),
(44, 1, 9, '2025-01-19', '2025-01-23'),
(45, 2, 10, '2025-02-05', '2025-02-08'),
(46, 3, 11, '2024-12-30', '2025-01-03'),
(47, 4, 12, '2025-01-20', '2025-01-25'),
(48, 5, 13, '2025-02-15', NULL),
(49, 1, 14, '2025-03-10', NULL),
(50, 2, 15, '2025-03-17', NULL);



INSERT INTO penalties (borrow_id, customer_id, ticket_id, date_imposed) VALUES 
(34, 11, 1, '2025-07-20'),
(35, 3, 2, '2025-07-20'),
(36, 13, 3, '2025-07-20'),
(37, 16, 4, '2025-07-20'),
(38, 18, 5, '2025-07-20'),
(39, 17, 6, '2025-07-20'),
(40, 6, 7, '2025-07-20'),
(41, 6, 8, '2025-07-20'),
(42, 7, 9, '2025-07-20'),
(43, 8, 10, '2025-07-20'),
(44, 9, 11, '2025-07-20'),
(45, 10, 12, '2025-07-20'),
(46, 11, 13, '2025-07-20');


SELECT * FROM staff;



