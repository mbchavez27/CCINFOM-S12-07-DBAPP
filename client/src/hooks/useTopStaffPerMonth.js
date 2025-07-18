import { useEffect, useState } from "react";
import {
  getTopLaptopPerMonth,
  getTopStaffPerMonth,
} from "../services/analytics.services.js";

export function useTopStaffPerMonth() {
  const [loading, setLoading] = useState(true);
  const [topStaff, setTopStaff] = useState([]);

  useEffect(() => {
    const fetchTopStaff = async () => {
      try {
        setLoading(true);
        const res = await getTopStaffPerMonth();
        setTopStaff(res.data.data);
      } catch (error) {
        console.error("Failed to fetch top staff per month", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopStaff();
  }, []);

  return { topStaffLoading: loading, topStaff };
}
