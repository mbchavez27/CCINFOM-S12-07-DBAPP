import { db } from "../config/db.js";

export const getTopLaptopPerMonth = async () => {
  try {
    const [result] = await db.query(
      "SELECT DATE_FORMAT(t.date_opened, '%Y-%m') AS report_month, l.product_name, COUNT(t.ticket_id) AS issue_count FROM tickets t JOIN laptops l ON t.laptop_id = l.laptop_id GROUP BY l.laptop_id, report_month ORDER BY report_month DESC, issue_count DESC"
    );

    return result;
  } catch (error) {
    console.error("Error fetching issues: ", error);
    throw error;
  }
};

export const getTopIssuePerMonth = async () => {
  try {
    const [result] = await db.query(
      "SELECT issue_month, type, category, issue_count FROM (SELECT DATE_FORMAT(t.date_opened, '%Y-%m') AS issue_month, i.type, i.category, COUNT(*) AS issue_count, RANK() OVER (PARTITION BY DATE_FORMAT(t.date_opened, '%Y-%m') ORDER BY COUNT(*) DESC) AS issue_rank FROM tickets t JOIN issues i ON t.issue_id = i.issue_id GROUP BY issue_month, i.type, i.category) ranked_issues WHERE issue_rank = 1;"
    );

    return result;
  } catch (error) {
    console.error("Error fetching issues: ", error);
    throw error;
  }
};

export const getTopStaffPerMonth = async () => {
  try {
    const [result] = await db.query(
      "SELECT CONCAT(s.first_name, ' ', s.last_name) AS staff_name, DATE_FORMAT(t.date_opened, '%Y-%m') AS ticket_month, COUNT(t.ticket_id) AS ticket_count FROM tickets t JOIN staff s ON t.staff_id = s.staff_id GROUP BY s.staff_id, ticket_month ORDER BY ticket_month DESC, ticket_count DESC"
    );

    return result;
  } catch (error) {
    console.error("Error fetching issues: ", error);
    throw error;
  }
};

export const getMonthlyTicketPerStaff = async () => {
  try {
    const [result] = await db.query(
      "SELECT s.staff_id, CONCAT(s.first_name, ' ', s.last_name) AS staff_name, DATE_FORMAT(t.date_opened, '%Y-%m') AS month, COUNT(t.ticket_id) / COUNT(DISTINCT t.date_opened) AS avg_daily_tickets FROM tickets t JOIN staff s ON t.staff_id = s.staff_id GROUP BY s.staff_id, month ORDER BY month DESC, avg_daily_tickets DESC"
    );

    return result;
  } catch (error) {
    console.error("Error fetching issues: ", error);
    throw error;
  }
};
