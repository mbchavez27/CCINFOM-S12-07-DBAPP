import axios from 'axios'

export const staffLogin = async (last_name, first_name) => {
  try {
    const response = await axios.post(`${API_LINK}/staff/register`, {
      last_name,
      first_name,
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
    return error
  }
}
