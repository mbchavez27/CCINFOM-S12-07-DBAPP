import axios from 'axios'

export const borrowLaptop = async (laptop_id, customer_id, pickup_date) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/borrow-record/borrow`,
      { laptop_id, customer_id, pickup_date }
    )
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getCurrentlyBorrowedLaptops = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/borrow-record/current`
    )

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
