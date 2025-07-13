import express from 'express'
import * as laptopController from '../controller/laptops.controller.js'
const router = express.Router()

router.get('/', laptopController.getLaptops)

export default router
