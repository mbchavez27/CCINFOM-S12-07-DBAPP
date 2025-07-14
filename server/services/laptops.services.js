import { db } from '../config/db.js'

export const getLaptops = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize
  try {
    const [laptops] = await db.query('SELECT * FROM laptops LIMIT ? OFFSET ?', [
      pageSize,
      offset,
    ])
    return laptops
  } catch (error) {
    console.error('Error fetching laptops: ', error)
    throw error
  }
}

export const getLaptopByID = async (laptop_id) => {
  try {
    const [laptop] = await db.query(
      'SELECT * FROM laptops WHERE laptop_id = ?',
      [laptop_id]
    )

    return laptop[0]
  } catch (error) {
    console.error('Error fetching laptops: ', error)
    throw error
  }
}

export const getAvailableLaptops = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize
  try {
    const [laptops] = await db.query(
      'SELECT * FROM laptops l WHERE l.laptop_id NOT IN (SELECT br.laptop_id FROM borrow_records br WHERE br.return_date IS NULL ) LIMIT ? OFFSET ?',
      [pageSize, offset]
    )

    return laptops
  } catch (error) {
    console.error('Error fetching available laptops: ', error)
    throw error
  }
}

export const getUsedLaptops = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize
  try {
    const [laptops] = await db.query(
      'SELECT * FROM laptops l WHERE l.laptop_id IN (SELECT br.laptop_id FROM borrow_records br WHERE br.return_date IS NULL ) LIMIT ? OFFSET ?',
      [pageSize, offset]
    )

    return laptops
  } catch (error) {
    console.error('Error fetching available laptops: ', error)
    throw error
  }
}

export const addLaptops = async (product_name, product_os, battery_health) => {
  try {
    const [result] = await db.query(
      'INSERT INTO laptops(product_name, product_os, battery_health) VALUES (?,?,?)',
      [product_name, product_os, battery_health]
    )

    const [row] = await db.query('SELECT * FROM laptops WHERE laptop_id = ?', [
      result.insertId,
    ])

    return row[0]
  } catch (error) {
    console.error('Error adding laptops: ', error)
    throw error
  }
}

export const deleteLaptops = async (laptop_id) => {
  try {
    const [result] = await db.query('DELETE FROM laptops WHERE laptop_id = ?', [
      laptop_id,
    ])

    return result.affectedRows > 0
  } catch (error) {
    console.error('Error deleting laptop: ', error)
    throw error
  }
}
