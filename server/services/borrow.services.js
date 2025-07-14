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

export const returnLaptop = async (borrow_id, return_date) => {
  try {
    const [result] = await db.query(
      'UPDATE borrow_records SET return_date = ? WHERE borrow_id = ? AND return_date IS NULL',
      [return_date, borrow_id]
    )

    return result.affectedRows > 0
  } catch (error) {
    console.error('Error returning laptop', error)
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

export const getBorrowedLaptops = async () => {
  try {
    const [laptops] = await db.query(
      "SELECT br.borrow_id, c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS customer_name, c.type AS customer_type, col.college AS college_name, l.laptop_id, l.product_name, l.product_os, l.battery_health, s.staff_id, CONCAT(s.first_name, ' ', s.last_name) AS assigned_staff, br.pickup_date, br.return_date FROM borrow_records br JOIN customers c ON br.customer_id = c.customer_id JOIN colleges col ON c.college_id = col.college_id JOIN laptops l ON br.laptop_id = l.laptop_id JOIN staff s ON br.staff_id = s.staff_id WHERE br.return_date IS NULL ORDER BY br.pickup_date DESC"
    )

    return laptops
  } catch (error) {
    console.error('Error fetching status: ', error)
    throw error
  }
}

export const getCurrentlyBorrowedLaptops = async () => {
  try {
    const [laptops] = await db.query(
      "SELECT br.borrow_id, c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS customer_name, c.type AS customer_type, col.college AS college_name, l.laptop_id, l.product_name, l.product_os, l.battery_health, s.staff_id, CONCAT(s.first_name, ' ', s.last_name) AS assigned_staff, br.pickup_date, br.return_date FROM borrow_records br JOIN customers c ON br.customer_id = c.customer_id JOIN colleges col ON c.college_id = col.college_id JOIN laptops l ON br.laptop_id = l.laptop_id JOIN staff s ON br.staff_id = s.staff_id WHERE br.return_date IS NULL ORDER BY br.pickup_date DESC"
    )

    return laptops
  } catch (error) {
    console.error('Error fetching status: ', error)
    throw error
  }
}
