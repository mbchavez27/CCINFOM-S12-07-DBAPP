import * as laptopsService from '../services/laptops.services.js'

export const getLaptops = async (req, res) => {
  try {
    const laptops = await laptopsService.getLaptops()
    if (!laptops) {
      res.status(404).json({ message: 'No laptops found' })
    }

    return res.status(200).json({ message: 'Fetched laptops', data: laptops })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
