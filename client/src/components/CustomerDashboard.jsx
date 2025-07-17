import { useEffect, useState } from "react";
import StatusCard from "./StatusCard";
import { getCustomerCurrentlyBorrowing } from "../services/customer.services.js";
import { getCurrentPenalty } from "../services/penalty.services.js";

function CustomerDashboard({ customer_id }) {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState({});
  const fetchCurrent = async () => {
    setLoading(false);
    const res = await getCustomerCurrentlyBorrowing(customer_id);
    setCurrent(res.data.data);
    setLoading(true);
  };

  useEffect(() => {
    fetchCurrent();
  }, []);

  const [penaltyLoading, setPenaltyLoading] = useState(false);
  const [penalty, setPenalty] = useState({});

  const fetchPenalty = async () => {
    setPenaltyLoading(false);
    const res = await getCurrentPenalty(customer_id);
    setPenalty(res.data.data);
    setPenaltyLoading(true);
  };

  useEffect(() => {
    fetchPenalty();
  }, []);

  return (
    <div className="flex flex-col p-17.5">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <p className="text-lg text-neutral-600">Updates</p>
      </div>
      <div className="py-5 flex gap-10">
        {loading ? (
          <StatusCard
            header="Currently Borrowing"
            text={current.product_name}
            subtext={`Return date: ${
              new Date(
                new Date(current.pickup_date).getTime() +
                  7 * 24 * 60 * 60 * 1000
              )
                .toISOString()
                .split("T")[0]
            }`}
          />
        ) : null}
        {penaltyLoading ? (
          <StatusCard
            header="Penalty Imposed"
            text="Status"
            subtext="Cannot Borrow till Settled"
          />
        ) : null}
      </div>
    </div>
  );
}

export default CustomerDashboard;
