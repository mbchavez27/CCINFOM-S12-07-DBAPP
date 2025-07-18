-- laptop_reports.sql
USE laptop_borrowing;

-- REPORT: Top laptops with most reported issues per month
SELECT 
    DATE_FORMAT(t.date_opened, '%Y-%m') AS report_month,
    l.product_name,
    COUNT(t.ticket_id) AS issue_count
FROM tickets t
JOIN laptops l ON t.laptop_id = l.laptop_id
GROUP BY l.laptop_id, report_month
ORDER BY report_month DESC, issue_count DESC;



-- REPORT: Most common issue type per month
SELECT 
    issue_month,
    type,
    category,
    issue_count
FROM (
    SELECT 
        DATE_FORMAT(t.date_opened, '%Y-%m') AS issue_month,
        i.type,
        i.category,
        COUNT(*) AS issue_count,
        RANK() OVER (
            PARTITION BY DATE_FORMAT(t.date_opened, '%Y-%m') 
            ORDER BY COUNT(*) DESC
        ) AS issue_rank
    FROM tickets t
    JOIN issues i ON t.issue_id = i.issue_id
    GROUP BY issue_month, i.type, i.category
) ranked_issues
WHERE issue_rank = 1;
