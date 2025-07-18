import { useEffect, useState } from "react";
import { getTopLaptopPerMonth } from "../services/analytics.services.js";

export function useTopLaptopPerMonth() {
  const [loading, setLoading] = useState(true);
  const [topLaptops, setTopLaptops] = useState([]);

  useEffect(() => {
    const fetchTopLaptops = async () => {
      try {
        setLoading(true);
        const res = await getTopLaptopPerMonth();
        setTopLaptops(res.data.data);
      } catch (error) {
        console.error("Failed to fetch top laptops per month", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopLaptops();
  }, []);

  return { topLaptopsLoading: loading, topLaptops };
}
