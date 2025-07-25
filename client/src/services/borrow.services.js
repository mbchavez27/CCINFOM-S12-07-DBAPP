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

export const returnLaptop = async (pickup_date, borrow_id, return_date) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/borrow-record/return`,
      { pickup_date, borrow_id, return_date }
    )
    return response
  } catch (error) {
    console.error(errror)
    throw error
  }
}

export const getBorrowedLaptops = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/borrow-record/borrowed`
    )

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getBorrowedLaptopByCustomerID = async (customer_id) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_LINK
      }/borrow-record/customer?customer_id=${customer_id}`
    )

    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getBorrowedLaptopsByID = async (borrow_id) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_LINK
      }/borrow-record/borrowed?borrow_id=${borrow_id}`
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
