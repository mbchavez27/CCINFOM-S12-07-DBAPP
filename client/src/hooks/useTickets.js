import { useEffect, useState } from "react";
import { getTickets } from "../services/tickets.services";

export function useTickets() {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTicket = async () => {
      setLoading(true);
      const res = await getTickets();
      setTickets(res.data.data);
      setLoading(false);
    };
    fetchTicket();
  }, []);

  return { ticketLoading: loading, tickets };
}
