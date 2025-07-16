import axios from "axios";

export const getTickets = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/tickets/`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addTickets = async (
  laptop_id,
  staff_id,
  issue_id,
  description,
  date_opened
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/tickets/add`,
      { laptop_id, staff_id, issue_id, description, date_opened }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
