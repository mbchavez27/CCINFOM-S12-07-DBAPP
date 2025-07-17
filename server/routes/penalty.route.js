import express from "express";
import * as penaltyController from "../controller/penalty.controller.js";
const router = express.Router();

router.get("/", penaltyController.getPenalties);
router.post("/add", penaltyController.addPenalties);
router.post("/close", penaltyController.closePenalty);
router.post("/delete", penaltyController.deletePenalty);

export default router;
