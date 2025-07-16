import { db } from "../config/db.js";

export const addTickets = async (
  laptop_id,
  staff_id,
  issue_id,
  description,
  date_opened
) => {
  try {
    const [result] = await db.query(
      "INSERT INTO tickets (laptop_id, staff_id, issue_id, description, date_opened) VALUES (?,?,?,?,?)",
      [laptop_id, staff_id, issue_id, description, date_opened]
    );

    const [rows] = await db.query(
      "SELECT t.ticket_id, l.product_name, CONCAT(s.first_name, ' ', s.last_name) as full_name, i.type, i.category, t.date_opened, t.date_closed FROM tickets t INNER JOIN laptops l ON t.laptop_id = l.laptop_id INNER JOIN staff s ON t.staff_id = s.staff_id INNER JOIN issues i ON t.issue_id = i.issue_id WHERE t.ticket_id = ? ",
      [result.insertId]
    );

    return rows[0];
  } catch (error) {
    console.error("Error fetching tickets", error);
    throw error;
  }
};

export const getTickets = async () => {
  try {
    const [tickets] = await db.query(
      "SELECT t.ticket_id, l.product_name, CONCAT(s.first_name, ' ', s.last_name) as full_name, i.type, i.category, t.date_opened, t.date_closed FROM tickets t INNER JOIN laptops l ON t.laptop_id = l.laptop_id INNER JOIN staff s ON t.staff_id = s.staff_id INNER JOIN issues i ON t.issue_id = i.issue_id"
    );

    return tickets;
  } catch (error) {
    console.error("Error fetching tickets: ", error);
    throw error;
  }
};
