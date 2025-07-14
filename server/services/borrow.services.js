import { db } from '../config/db.js'

export const borrowLaptop = async (
  laptop_id,
  staff_id,
  customer_id,
  pickup_date
) => {
  try {
    const [result] = await db.query(
      'INSERT INTO borrow_records (laptop_id, staff_id, customer_id, pickup_date) VALUES (?,?,?,?)',
      [laptop_id, staff_id, customer_id, pickup_date]
    )

    const [row] = await db.query(
      'SELECT * FROM borrow_records WHERE borrow_id = ?',
      [result.insertId]
    )

    return row[0]
  } catch (error) {
    console.error('Error borrowing laptops: ', error)
    throw error
  }
}

export const checkBorrowingStatus = async (customer_id) => {
  try {
    const [status] = await db.query(
      'SELECT * FROM borrow_records WHERE customer_id = ? AND return_date IS NULL',
      [customer_id]
    )

    return status
  } catch (error) {
    console.error('Error fetching status: ', error)
    throw error
  }
}
