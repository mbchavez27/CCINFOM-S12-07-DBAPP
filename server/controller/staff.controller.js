import * as staffService from '../services/staff.services.js'

export const getStaff = async (req, res) => {
  try {
    const staff = await staffService.getStaff()
    if (staff.length == 0) {
      res.status(404).json({ message: 'No staff found' })
    }

    return res.status(200).json({ message: 'Fetched staff', data: staff })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const loginStaff = async (req, res) => {
  const { last_name, first_name } = req.body

  try {
    const staff = await staffService.loginStaff(last_name, first_name)

    if (!staff) {
      res.status(404).json({ message: 'No staff found' })
    }

    res.status(200).json({ message: 'Logged in staff', data: staff })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const registerStaff = async (req, res) => {
  const { last_name, first_name, contact } = req.body

  try {
    const newStaff = await staffService.registerStaff(
      last_name,
      first_name,
      contact
    )

    res.status(201).json(newStaff)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
