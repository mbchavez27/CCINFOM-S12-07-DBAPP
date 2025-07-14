import * as borrowService from '../services/borrow.services.js'
import { getRandomStaff } from '../services/staff.services.js'

export const borrowLaptop = async (req, res) => {
  const { laptop_id, customer_id, pickup_date } = req.body
  try {
    const borrow_status = await borrowService.checkBorrowingStatus(customer_id)
    if (borrow_status.length == 0) {
      const staff_id = await getRandomStaff()

      if (!staff_id) {
        res.status(404).json({ message: 'No staff found' })
      } else {
        const borrow_record = await borrowService.borrowLaptop(
          laptop_id,
          staff_id.staff_id,
          customer_id,
          pickup_date
        )

        res
          .status(201)
          .json({ message: 'Borrowed Laptop', data: borrow_record })
      }
    } else {
      res.status(400).json({ error: 'Customer is already borrowing' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
