import { db } from "../config/db.js";

export const addPenalties = async (
  borrow_id,
  customer_id,
  ticket_id,
  date_imposed
) => {
  try {
    const [result] = await db.query(
      "INSERT penalties (borrow_id, customer_id, ticket_id, date_imposed) VALUES (?,?,?,?)",
      [borrow_id, customer_id, ticket_id, date_imposed]
    );

    const [rows] = await db.query(
      "SELECT p.penalty_id, br.borrow_id, c.customer_id, CONCAT(c.first_name, ' ', c.last_name) as customer_name, l.product_name, CONCAT(s.first_name, ' ', s.last_name) as staff_name, i.type, i.category, t.description, p.date_imposed, p.date_lifted FROM penalties p INNER JOIN tickets t ON p.ticket_id = t.ticket_id INNER JOIN borrow_records br ON p.borrow_id = br.borrow_id INNER JOIN customers c ON p.customer_id = c.customer_id INNER JOIN staff s ON t.staff_id = s.staff_id INNER JOIN issues i ON t.issue_id = i.issue_id INNER JOIN laptops l ON t.laptop_id = l.laptop_id WHERE p.penalty_id = ?",
      [result.insertId]
    );

    return rows[0];
  } catch (error) {
    console.error("Error adding tickets", error);
  }
};

export const deletePenalty = async (penalty_id) => {
  try {
    const [result] = await db.query(
      "DELETE FROM penalties WHERE penalty_id = ?",
      [penalty_id]
    );

    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting penalties", error);
    throw error;
  }
};

export const closePenalty = async (date_lifted, penalty_id) => {
  try {
    const [result] = await db.query(
      "UPDATE penalties SET date_lifted = ? WHERE penalty_id = ?",
      [date_lifted, penalty_id]
    );

    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error updating penalty: ", error);
    throw error;
  }
};

export const getPenalties = async () => {
  try {
    const [penalties] = await db.query(
      "SELECT p.penalty_id, br.borrow_id, c.customer_id, CONCAT(c.first_name, ' ', c.last_name) as customer_name, l.product_name, CONCAT(s.first_name, ' ', s.last_name) as staff_name, i.type, i.category, p.date_imposed, p.date_lifted FROM penalties p INNER JOIN tickets t ON p.ticket_id = t.ticket_id INNER JOIN borrow_records br ON p.borrow_id = br.borrow_id INNER JOIN customers c ON p.customer_id = c.customer_id INNER JOIN staff s ON t.staff_id = s.staff_id INNER JOIN issues i ON t.issue_id = i.issue_id INNER JOIN laptops l ON t.laptop_id = l.laptop_id;"
    );
    return penalties;
  } catch (error) {
    console.error("Error fetching penalties: ", error);
    throw error;
  }
};
