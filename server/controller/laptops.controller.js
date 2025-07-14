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

export const addLaptops = async (req, res) => {
  const { product_name, product_os, battery_health } = req.body

  try {
    const newLaptop = await laptopsService.addLaptops(
      product_name,
      product_os,
      battery_health
    )

    res.status(201).json(newLaptop)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteLaptops = async (req, res) => {
  const { laptop_id } = req.body

  try {
    const success = await laptopsService.deleteLaptops(laptop_id)

    if (success) {
      res.status(200).json({ message: 'Laptop deleted successfully' })
    } else {
      res.status(404).json({ message: 'Laptop not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
