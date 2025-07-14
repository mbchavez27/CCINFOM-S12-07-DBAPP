import * as customerService from '../services/customer.services.js'

export const registerCustomers = async (req, res) => {
  const { last_name, first_name, type, college_id } = req.body

  try {
    const newCustomer = await customerService.registerCustomers(
      last_name,
      first_name,
      type,
      college_id
    )

    res.status(201).json(newCustomer)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const loginCustomer = async (req, res) => {
  const { last_name, first_name } = req.body
  try {
    const customer = await customerService.loginCustomer(last_name, first_name)

    if (!customer) {
      res.status(404).json({ message: 'No customers found' })
    }

    res.status(200).json({ message: 'Logged in customer', data: customer })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getCustomers = async (req, res) => {
  try {
    const customers = await customerService.getCustomers()
    if (customers.length == 0) {
      res.status(404).json({ message: 'No customers found' })
    }

    return res
      .status(200)
      .json({ message: 'Fetched customers', data: customers })
  } catch (err) {
    console.error('Error: ', err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
