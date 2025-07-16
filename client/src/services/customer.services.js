import axios from "axios";

export const customerLogin = async (last_name, first_name) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/customers/login`,
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

export const customerRegister = async (
  last_name,
  first_name,
  type,
  college_id
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/customers/register`,
      { last_name, first_name, type, college_id }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCustomerCurrentlyBorrowing = async (customer_id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/customers/current`,
      { params: { customer_id } }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
