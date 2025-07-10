import express from "express";
import * as collegeController from "../controller/college.controller.js";

const router = express.Router();

router.get("/", collegeController.getColleges);

export default router;
