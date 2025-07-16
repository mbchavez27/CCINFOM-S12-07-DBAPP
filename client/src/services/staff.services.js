import axios from "axios";

export const staffLogin = async (last_name, first_name) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/staff/login`,
      {
        last_name,
        first_name,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const staffRegister = async (last_name, first_name, contact) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/staff/register`,
      {
        last_name,
        first_name,
        contact,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStaff = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_LINK}/staff`);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
