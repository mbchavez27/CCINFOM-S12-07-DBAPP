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
