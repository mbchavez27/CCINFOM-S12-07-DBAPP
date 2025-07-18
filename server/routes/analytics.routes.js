import express from 'express'
import * as analyticsController from '../controller/analytics.controller.js'
const router = express.Router()

router.get('/laptop/top-per-month', analyticsController.getTopLaptopPerMonth)
router.get('/issue/top-per-month', analyticsController.getTopIssuePerMonth)
router.get('/staff/top-per-month', analyticsController.getTopStaffPerMonth)
router.get(
  '/staff/monthly-average',
  analyticsController.getMonthlyTicketPerStaff
)
router.get(
  '/customer/daily-average',
  analyticsController.getCollegeDailyBorrowing
)
router.get(
  '/customer/monthly-average',
  analyticsController.getCollegeMonthlyBorrowing
)
router.get('/laptop/total-per-day', analyticsController.getTotalLaptopPerDay)
router.get(
  '/laptop/monthly-average',
  analyticsController.getAverageLaptopPerMonth
)

export default router
