import axios from 'axios'

export const getLaptops = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/laptops/`,
      { params: { page, pageSize } }
    )
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}
