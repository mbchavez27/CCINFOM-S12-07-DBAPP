import express from "express";
import * as customerController from "../controller/customer.controller.js";
const router = express.Router();

router.get("/", customerController.getCustomers);
router.get("/current", customerController.getCustomerCurrentlyBorrowing);
router.post("/register", customerController.registerCustomers);
router.post("/login", customerController.loginCustomer);

export default router;
