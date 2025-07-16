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

export const loginCustomer = async (last_name, first_name) => {
  try {
    const [customer] = await db.query(
      "SELECT * FROM customers c WHERE c.last_name = ? AND c.first_name = ?",
      [last_name, first_name]
    );

    return customer[0];
  } catch (error) {
    console.log("Error Fetching customer:", error);
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

export const getCustomerCurrentlyBorrowing = async (customer_id) => {
  try {
    const [result] = await db.query(
      "SELECT l.product_name, br.pickup_date, br.return_date, c.customer_id as customer_id, CONCAT(c.last_name, ' ', c.first_name) as customer_name FROM borrow_records br INNER JOIN laptops l ON br.laptop_id = l.laptop_id INNER JOIN customers c ON br.customer_id = c.customer_id WHERE c.customer_id = ? AND br.return_date IS NULL",
      [customer_id]
    );

    return result[0];
  } catch (error) {
    console.error("Erro fetching customer borrowing: ", error);
    throw error;
  }
};
