import * as issuesService from "../services/issues.services.js";

export const getIssues = async (req, res) => {
  try {
    const issues = await issuesService.getIssues();

    if (issues.length == 0) {
      res.status(404).json({ message: "No issues found" });
    }

    return res.status(200).json({ message: "Fetched issues", data: issues });
  } catch (error) {
    console.error("Error: ", err);

    return res.status(500).json({ message: "Internal server error" });
  }
};
