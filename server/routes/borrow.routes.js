import express from 'express'
import * as borrowController from '../controller/borrow.controller.js'
const router = express.Router()

router.post('/borrow', borrowController.borrowLaptop)
router.get('/current', borrowController.getCurrentlyBorrowedLaptops)

export default router
