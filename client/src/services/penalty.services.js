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

export const getCurrentPenalty = async (customer_id) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_LINK
      }/penalty/current?customer_id=${customer_id}`
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

export const deletePenalty = async (penalty_id) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/penalty/delete`,
      { penalty_id }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const closePenalty = async (date_lifted, penalty_id) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_LINK}/penalty/close`,
      { date_lifted, penalty_id }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
  throw error;
};
