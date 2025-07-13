import axios from 'axios'

export const getLaptops = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/laptops/`
    )
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}
