import express from 'express'
import * as borrowController from '../controller/borrow.controller.js'
const router = express.Router()

router.post('/borrow', borrowController.borrowLaptop)
router.post('/return', borrowController.returnLaptop)
router.get('/current', borrowController.getCurrentlyBorrowedLaptops)
router.get('/customer', borrowController.getBorrowedLaptopByCustomerID)
router.get('/borrowed', borrowController.getBorrowedLaptops)

export default router
