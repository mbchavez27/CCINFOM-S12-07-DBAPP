import { useEffect, useState } from "react";
import {
  getMonthlyTicketPerStaff,
  getTopLaptopPerMonth,
  getTopStaffPerMonth,
} from "../services/analytics.services.js";

export function useMonthlyTickerPerStaff() {
  const [loading, setLoading] = useState(true);
  const [monthlyStaff, setMonthlyStaff] = useState([]);

  useEffect(() => {
    const fetchTopStaff = async () => {
      try {
        setLoading(true);
        const res = await getMonthlyTicketPerStaff();
        setMonthlyStaff(res.data.data);
      } catch (error) {
        console.error("Failed to fetch top staff per month", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopStaff();
  }, []);

  return { monthlyStaffLoading: loading, monthlyStaff };
}
