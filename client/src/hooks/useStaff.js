import { useState, useEffect } from "react";
import { getStaff } from "../services/staff.services";

export function useStaff() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStaff = async () => {
      setLoading(true);
      try {
        const res = await getStaff();
        setStaff(res.data.data);
      } catch (error) {
        console.error("Failed to fetch staff:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return { staffLoading: loading, staff };
}
