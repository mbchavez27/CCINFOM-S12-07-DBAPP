import express from "express";
import * as analyticsController from "../controller/analytics.controller.js";
const router = express.Router();

router.get("/laptop/top-per-month", analyticsController.getTopLaptopPerMonth);
router.get("/issue/top-per-month", analyticsController.getTopIssuePerMonth);

export default router;
