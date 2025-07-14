import express from 'express'
import * as laptopController from '../controller/laptops.controller.js'
const router = express.Router()

router.get('/', laptopController.getLaptops)
router.get('/add', laptopController.addLaptops)
router.get('/delete', laptopController.deleteLaptops)

export default router
