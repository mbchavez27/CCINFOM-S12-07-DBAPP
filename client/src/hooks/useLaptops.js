import { useState, useEffect } from "react";
import {
  getLaptops,
  getAvailableLaptops,
  getUsedLaptops,
} from "../services/laptops.service.js";

export function useLaptops(type = "all", page = 1, pageSize = 10) {
  const [loading, setLoading] = useState(false);
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      setLoading(true);
      try {
        let response;

        if (type === "available") {
          response = await getAvailableLaptops(page, pageSize);
        } else if (type === "used") {
          response = await getUsedLaptops(page, pageSize);
        } else {
          response = await getLaptops(page, pageSize);
        }

        setLaptops(response.data.data);
      } catch (error) {
        console.error("Error fetching laptops:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLaptops();
  }, [type, page, pageSize]);

  return { loading, laptops };
}
