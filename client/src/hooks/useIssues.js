import { useState, useEffect } from "react";
import { getIssues } from "../services/issues.service.js";

export function useIssues() {
  const [loading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      const res = await getIssues();
      setIssues(res.data.data);
      setLoading(false);
    };

    fetchIssues();
  }, []);

  return { issueLoading: loading, issues };
}
