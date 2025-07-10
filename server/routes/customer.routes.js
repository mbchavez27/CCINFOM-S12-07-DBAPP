import express from "express";
import * as customerController from "../controller/customer.controller.js";
const router = express.Router();

router.get("/", customerController.getCustomers);
router.post("/register", customerController.registerCustomers);

export default router;
