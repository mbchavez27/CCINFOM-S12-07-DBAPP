import express from "express";
import * as laptopController from "../controller/laptops.controller.js";
const router = express.Router();

router.get("/", laptopController.getLaptops);
router.get("/:id", laptopController.getLaptopByID);
router.post("/add", laptopController.addLaptops);
router.post("/delete", laptopController.deleteLaptops);

export default router;
