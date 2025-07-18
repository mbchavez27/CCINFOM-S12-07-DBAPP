import axios from "axios";

export const getTopLaptopPerMonth = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/analytic/laptop/top-per-month`
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTopIssuePerMonth = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/analytic/issue/top-per-month`
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
