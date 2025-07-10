import { db } from "../config/db.js";

export const getCollges = async () => {
  try {
    const [colleges] = await db.query(
      "SELECT college_id, college FROM colleges"
    );

    return colleges;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
