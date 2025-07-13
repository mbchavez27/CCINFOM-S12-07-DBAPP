import * as laptopsService from '../services/laptops.services.js'

export const getLaptops = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.pageSize) || 10

  try {
    const laptops = await laptopsService.getLaptops(page, pageSize)

    if (!laptops || laptops.length === 0) {
      res.status(404).json({ message: 'No laptops found' })
    }

    return res
      .status(200)
      .json({ message: 'Fetched laptops', data: laptops, page, pageSize })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
