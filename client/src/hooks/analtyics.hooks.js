import { useEffect, useState } from 'react'
import {
  getAverageLaptopPerMonth,
  getCollegeDailyBorrowing,
  getCollegeMonthlyBorrowing,
  getTopIssuePerMonth,
  getTotalLaptopPerDay,
} from '../services/analytics.services'

export function useGetCollegeDailyBorrowing() {
  const [loading, setLoading] = useState(true)
  const [dailyColleges, setDailyColleges] = useState([])

  useEffect(() => {
    const fetchTopIssues = async () => {
      try {
        setLoading(true)
        const res = await getCollegeDailyBorrowing()
        setDailyColleges(res.data.data)
      } catch (error) {
        console.error('Failed to fetch top issues per month', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopIssues()
  }, [])

  return { dailyCollegesLoading: loading, dailyColleges }
}

export function useGetCollegeMonthlyBorrowing() {
  const [loading, setLoading] = useState(true)
  const [monthlyColleges, setDailyColleges] = useState([])

  useEffect(() => {
    const fetchTopIssues = async () => {
      try {
        setLoading(true)
        const res = await getCollegeMonthlyBorrowing()
        setDailyColleges(res.data.data)
      } catch (error) {
        console.error('Failed to fetch top issues per month', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopIssues()
  }, [])

  return { monthlyCollegesLoading: loading, monthlyColleges }
}

export function useGetTotalLaptopPerDay() {
  const [loading, setLoading] = useState(true)
  const [totalLaptop, setTotalLaptop] = useState([])

  useEffect(() => {
    const fetchTopIssues = async () => {
      try {
        setLoading(true)
        const res = await getTotalLaptopPerDay()
        setTotalLaptop(res.data.data)
      } catch (error) {
        console.error('Failed to fetch top issues per month', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopIssues()
  }, [])

  return { totalLaptopLoading: loading, totalLaptop }
}

export function useGetAverageLaptopPerMonth() {
  const [loading, setLoading] = useState(true)
  const [averageLaptop, setAverageLaptop] = useState([])

  useEffect(() => {
    const fetchTopIssues = async () => {
      try {
        setLoading(true)
        const res = await getAverageLaptopPerMonth()
        setAverageLaptop(res.data.data)
      } catch (error) {
        console.error('Failed to fetch top issues per month', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopIssues()
  }, [])

  return { averageLaptopLoading: loading, averageLaptop }
}
