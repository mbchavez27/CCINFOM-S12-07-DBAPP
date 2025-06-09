create database laptop_borrowing;

create table laptops (
	laptop_id decimal(8,0) not null auto_increment,
	product_name varchar(255) not null,
	product_os varchar(50),
	battery_health int not null,
	constraint laptop_pk primary key (laptop_id),
	constraint chk_battery check (battery_health between 1 and 100),
	constraint chk_os check (product_os in ('Windows', 'MacOS', 'Linux'))
);

create table customers (
	customer_id decimal(8,0) not null auto_increment,
	last_name varchar(255) not null,
	first_name varchar(255) not null,
	type varchar(50) not null,
	college varchar(50) not null,
	constraint customer_pk primary key (customer_id),
	constraint chk_type check (type in ('Student', 'Faculty')),
	constraint chk_college check (college in ('College of Business', 'College of Education', 
						'School of Law', 'College of Engineering',
						'College of Liberal Arts', 'College of Science',
						'College of Computer Studies', 'School of Economics'))
);

create table staffs (
	staff_id decimal(8,0) not null auto_increment,
	last_name varchar(255) not null,
	first_name varchar(255) not null,
	role varchar(50),
	contact varchar(20) not null,
	constraint staff_pk primary key (staff_id)
);

create table tickets (
	ticket_id decimal(8,0) not null auto_increment,
	laptop_id decimal(8,0) not null,
	staff_id decimal(8,0) not null,
	customer_id decimal(8,0) not null,
	issue_type varchar(50) not null,
	description varchar(255) not null,
	date_opened date not null,
	date_closed date,
	status varchar(10) as (
        case
            when date_closed is null then 'open'
            else 'closed'
        end
    ) stored,
	constraint chk_issue_type check (issue_type in ('Software', 'Hardware', 'Other')),
	constraint chk_date_order check (date_closed is null or date_opened < date_closed),
	constraint ticket_pk primary key (ticket_id),
	constraint laptop_fk foreign key (laptop_id) references laptops(laptop_id),
	constraint staff_fk foreign key (staff_id) references staffs(staff_id),
	constraint customer_fk foreign key (customer_id) references customers(customer_id)
);

create table borrow_record (
	borrow_id decimal(8,0) not null auto_increment,
	laptop_id decimal(8,0) not null,
	staff_id decimal(8,0) not null,
	customer_id decimal(8,0) not null,
	pickup_date date not null,
	return_date date,
	constraint chk_date check (return_date is null or pickup_date < return_date),
	constraint laptop_fk foreign key (laptop_id) references laptops(laptop_id),
	constraint staff_fk foreign key (staff_id) references staffs(staff_id),
	constraint customer_fk foreign key (customer_id) references customers(customer_id)
);
