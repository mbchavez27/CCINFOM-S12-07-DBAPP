import { useState, useEffect } from 'react'
import axios from 'axios'

export function useBorrowedLaptops(customer_id) {
  const [borrowedLaptops, setBorrowedLaptop] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!customer_id) return

    const fetchBorrowedLaptop = async () => {
      setLoading(true)
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_LINK
          }/borrow-record/customer?customer_id=${customer_id}`
        )
        setBorrowedLaptop(res.data.data)
      } catch (error) {
        console.error('Failed to fetch borrowed laptop:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBorrowedLaptop()
  }, [customer_id])

  return { borrowedLaptopLoading: loading, borrowedLaptops }
}
