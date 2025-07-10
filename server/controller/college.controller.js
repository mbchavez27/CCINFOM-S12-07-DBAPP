import * as collegeService from "../services/colleges.services.js";

export const getColleges = async (req, res) => {
  try {
    const colleges = await collegeService.getColleges();

    if (!colleges) {
      res.status(404).json({ message: "No colleges found" });
    }

    return res
      .status(200)
      .json({ message: "Fetched colleges", data: colleges });
  } catch (error) {
    console.error("Error: ", err);

    return res.status(500).json({ message: "Internal server error" });
  }
};
