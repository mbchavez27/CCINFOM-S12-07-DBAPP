import * as analyticsServices from '../services/analytics.services.js'

export const getTopLaptopPerMonth = async (req, res) => {
  try {
    const result = await analyticsServices.getTopLaptopPerMonth()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getTopIssuePerMonth = async (req, res) => {
  try {
    const result = await analyticsServices.getTopIssuePerMonth()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getTopStaffPerMonth = async (req, res) => {
  try {
    const result = await analyticsServices.getTopStaffPerMonth()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getMonthlyTicketPerStaff = async (req, res) => {
  try {
    const result = await analyticsServices.getMonthlyTicketPerStaff()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getCollegeDailyBorrowing = async (req, res) => {
  try {
    const result = await analyticsServices.getCollegeDailyBorrowing()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getCollegeMonthlyBorrowing = async (req, res) => {
  try {
    const result = await analyticsServices.getCollegeMonthlyBorrowing()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getTotalLaptopPerDay = async (req, res) => {
  try {
    const result = await analyticsServices.getTotalLaptopPerDay()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export const getAverageLaptopPerMonth = async (req, res) => {
  try {
    const result = await analyticsServices.getAverageLaptopPerMonth()

    if (result.length == 0) {
      res.status(404).json({ message: 'No status found' })
    }

    return res.status(200).json({ message: 'Fetched reports', data: result })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
