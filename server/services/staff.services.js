import { db } from "../config/db.js";

export const getStaff = async () => {
  try {
    const [staff] = await db.query("SELECT * FROM staff");

    return staff;
  } catch (error) {
    console.error("Error fetching staff: ", error);
    throw error;
  }
};

export const loginStaff = async (last_name, first_name) => {
  try {
    const [staff] = await db.query(
      "SELECT * FROM staff s WHERE s.last_name = ? AND s.first_name = ?",
      [last_name, first_name]
    );
    return staff;
  } catch (error) {
    console.error("Error fetching staff: ", error);
    throw error;
  }
};

export const registerStaff = async (last_name, first_name, role, contact) => {
  try {
    const [result] = await db.query(
      "INSERT INTO staff (last_name, first_name, role, contact) VALUES (?, ?, ?, ?)",
      [last_name, first_name, role, contact]
    );

    const [rows] = await db.query("SELECT * FROM staff WHERE staff_id = ?", [
      result.insertId,
    ]);

    return rows[0];
  } catch (error) {
    console.log("Error adding customers: ", error);
    throw error;
  }
};
