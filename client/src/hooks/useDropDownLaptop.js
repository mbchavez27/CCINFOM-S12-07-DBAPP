import { useEffect, useState } from "react";
import { getUsedLaptops } from "../services/laptop.services";

export const useLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchLaptops = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await getUsedLaptops(page);
      const newLaptops = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data.data)
        ? res.data.data
        : [];

      setLaptops((prev) => [...prev, ...newLaptops]);
      setHasMore(newLaptops.length > 0);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to fetch laptops", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  return { laptops, fetchLaptops, loading };
};
