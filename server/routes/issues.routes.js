import express from "express";
import * as issuesController from "../controller/issues.controller.js";

const router = express.Router();

router.get("/", issuesController.getIssues);

export default router;
