import { db } from '../config/db.js'

export const getLaptops = async () => {
  try {
    const [laptops] = await db.query('SELECT * FROM laptops')
    return laptops
  } catch (error) {
    console.error('Error fetching laptops: ', error)
    throw error
  }
}
