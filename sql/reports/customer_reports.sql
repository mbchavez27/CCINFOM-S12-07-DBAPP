use laptop_borrowing;
/*
   2. Customer Analysis Report 
      Accessed Records: 
         - Access Customer Record Management to obtain information based on college
      Reports:
         - College with Highest Daily Borrowing
         - Monthly Laptop Borrowing Duration per College
*/
-- CREATE OR REPLACE VIEW college_daily_borrowing_ranking AS
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
    
-- CREATE OR REPLACE VIEW college_monthly_borrowing_duration_ranking AS
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
