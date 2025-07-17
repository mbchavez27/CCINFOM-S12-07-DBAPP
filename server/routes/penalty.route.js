import express from "express";
import * as penaltyController from "../controller/penalty.controller.js";
const router = express.Router();

router.get("/", penaltyController.getPenalties);
router.post("/add", penaltyController.addPenalties);

export default router;
