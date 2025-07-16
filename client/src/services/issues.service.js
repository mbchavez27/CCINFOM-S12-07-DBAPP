import axios from "axios";

export const getIssues = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/issues/`
    );

    return response;
  } catch (error) {
    console.error(error);
    throw errror;
  }
};
