/* 
   1. Laptop Borrowing Demand Report
      Accessed Records: 
	     - Access Customer Record Management to obtain total number of laptop borrows based on pickup records,
		 - Access Laptop Record Management to obtain the average number of laptops 
      Reports:
		 - Total number of laptop borrows per day, based on pickup records
		 - Average number of laptop borrows per day for a given month
*/
CREATE OR REPLACE VIEW borrows_per_day AS
SELECT pickup_date, COUNT(laptop_id) AS no_of_borrows
FROM borrow_records
GROUP BY pickup_date
ORDER BY pickup_date;

CREATE OR REPLACE VIEW avg_borrows_per_month AS
SELECT borrows_per_month.month, 
    borrows_per_month.no_of_borrows / DAYOFMONTH(LAST_DAY(CONCAT(borrows_per_month.month, '-01'))) AS avg_daily_borrows
FROM 
(
	SELECT DATE_FORMAT(pickup_date, '%Y-%m') AS month, COUNT(laptop_id) AS no_of_borrows
	FROM borrow_records
	GROUP BY month
	ORDER BY month
) borrows_per_month
ORDER BY borrows_per_month.month;

SELECT *
FROM borrows_per_day;

SELECT *
FROM avg_borrows_per_month;


/*
   2. Customer Analysis Report 
      Accessed Records: 
         - Access Customer Record Management to obtain information based on college
      Reports:
         - College with Highest Daily Borrowing
         - Monthly Laptop Borrowing Duration per College
*/
CREATE OR REPLACE VIEW college_daily_borrowing_ranking AS
SELECT daily_borrows.college, AVG(daily_borrows.no_of_borrows ) AS avg_daily_borrows
FROM
(
	SELECT monthly_borrows.college, monthly_borrows.month, 
		monthly_borrows.no_of_borrows / DAYOFMONTH(LAST_DAY(CONCAT(monthly_borrows.month, '-01'))) AS no_of_borrows
	FROM
	(
		SELECT co.college, DATE_FORMAT(br.pickup_date, '%Y-%m') AS month, COUNT(br.laptop_id) AS no_of_borrows
		FROM borrow_records br
		JOIN customers cu ON br.customer_id = cu.customer_id
		JOIN colleges co ON cu.college_id = co.college_id
		GROUP BY co.college, month
	) monthly_borrows
) daily_borrows
GROUP BY daily_borrows.college
ORDER BY avg_daily_borrows DESC;

-- SELECT monthly_borrows.college, 
--     AVG(monthly_borrows.no_of_borrows / DAYOFMONTH(LAST_DAY(CONCAT(monthly_borrows.month, '-01')))) AS avg_daily_borrows
-- FROM
-- (
-- 	SELECT co.college, DATE_FORMAT(br.pickup_date, '%Y-%m') AS month, COUNT(br.laptop_id) AS no_of_borrows
-- 	FROM borrow_records br
-- 	JOIN customers cu ON br.customer_id = cu.customer_id
-- 	JOIN colleges co ON cu.college_id = co.college_id
-- 	GROUP BY co.college, month
-- ) monthly_borrows
-- GROUP BY monthly_borrows.college
-- ORDER BY avg_daily_borrows DESC;
    
CREATE OR REPLACE VIEW college_monthly_borrowing_duration_ranking AS
SELECT avg_monthly_borrowing_duration.college, AVG(avg_monthly_borrowing_duration.avg_borrowing_duration) AS avg_monthly_borrowing_duration
FROM
(
	SELECT co.college, DATE_FORMAT(pickup_date, '%Y-%m') AS month, AVG(DATEDIFF(br.return_date, br.pickup_date)) AS avg_borrowing_duration
	FROM borrow_records br
	JOIN customers cu ON br.customer_id = cu.customer_id
	JOIN colleges co ON cu.college_id = co.college_id
	GROUP BY co.college, month
) avg_monthly_borrowing_duration
GROUP BY avg_monthly_borrowing_duration.college
ORDER BY avg_monthly_borrowing_duration DESC;

SELECT *
FROM college_daily_borrowing_ranking;

SELECT *
FROM college_monthly_borrowing_duration_ranking