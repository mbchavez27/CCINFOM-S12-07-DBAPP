import express from "express";
import * as staffController from "../controller/staff.controller.js";
const router = express.Router();

router.get("/", staffController.getStaff);
router.post("/register", staffController.registerStaff);

export default router;
