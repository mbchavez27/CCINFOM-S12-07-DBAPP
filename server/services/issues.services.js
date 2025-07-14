import { db } from "../config/db.js";

export const getIssues = async () => {
  try {
    const [result] = await db.query("SELECT * FROM issues");

    return result;
  } catch (error) {
    console.error("Error fetching issues: ", error);
    throw error;
  }
};
