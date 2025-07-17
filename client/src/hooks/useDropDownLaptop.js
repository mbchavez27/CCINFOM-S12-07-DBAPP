import { useEffect, useState } from "react";
import { getAvailableLaptops, getUsedLaptops } from "../services/laptop.services";

export const useLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchLaptops = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await getAvailableLaptops(page);
      const newLaptops = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data.data)
        ? res.data.data
        : [];

      setLaptops((prev) => {
        const existingIds = new Set(prev.map((l) => l.laptop_id));
        const filteredNew = newLaptops.filter(
          (l) => !existingIds.has(l.laptop_id)
        );
        return [...prev, ...filteredNew];
      });

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
