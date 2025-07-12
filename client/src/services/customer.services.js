import axios from 'axios'

export const customerLogin = async (last_name, first_name) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/customers/login`,
      {
        last_name,
        first_name,
      }
    )
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}
