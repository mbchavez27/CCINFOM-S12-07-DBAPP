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
