import axios from "axios";

export const getPenalties = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_LINK}/penalty/`
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addPenalty = async (
  borrow_id,
  customer_id,
  laptop_id,
  staff_id,
  issue_id,
  description,
  date_opened
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/penalty/add`,
      {
        borrow_id,
        customer_id,
        laptop_id,
        staff_id,
        issue_id,
        description,
        date_opened,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
