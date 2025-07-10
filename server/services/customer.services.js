import { db } from "../config/db.js";

export const getCustomers = async () => {
  try {
    const [customers] = await db.query("SELECT * FROM customers");
    return customers;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const registerCustomers = async (
  last_name,
  first_name,
  type,
  college_id
) => {
  try {
    const [result] = await db.query(
      "INSERT INTO customers (last_name, first_name, type, college_id) VALUES (?, ?, ?, ?)",
      [last_name, first_name, type, college_id]
    );

    const [rows] = await db.query(
      "SELECT * FROM customers WHERE customer_id = ?",
      [result.insertId]
    );
    return rows[0];
  } catch (error) {
    console.log("Error adding customers:", error);
    throw error;
  }
};
