import axios from "axios";

export const getLaptops = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/laptops/`,
      { params: { page, pageSize } }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addLaptops = async (product_name, product_os, battery_health) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/laptops/add`,
      { product_name, product_os, battery_health }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteLaptop = async (laptop_id) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/laptops/delete`,
      { laptop_id }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
