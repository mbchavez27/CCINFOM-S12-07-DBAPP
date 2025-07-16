import express from "express";
import * as ticketsController from "../controller/tickets.controller.js";
const router = express.Router();

router.get("/", ticketsController.getTickets);
router.post("/add", ticketsController.addTickets);

export default router;
