import { useEffect, useState } from "react";
import { getTopIssuePerMonth } from "../services/analytics.services";

export function useTopIssuePerMonth() {
  const [loading, setLoading] = useState(true);
  const [topIssues, setTopIssues] = useState([]);

  useEffect(() => {
    const fetchTopIssues = async () => {
      try {
        setLoading(true);
        const res = await getTopIssuePerMonth();
        setTopIssues(res.data.data);
      } catch (error) {
        console.error("Failed to fetch top issues per month", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopIssues();
  }, []);

  return { topIssuesLoading: loading, topIssues };
}
