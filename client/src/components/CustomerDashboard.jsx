import StatusCard from "./StatusCard";

function CustomerDashboard() {
  return (
    <div className="flex flex-col p-17.5">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <p className="text-lg text-neutral-600">Updates</p>
      </div>
      <div className="py-5 flex gap-10">
        <StatusCard
          header="Currently Borrowing"
          text="Lenovo Thinkpad T480"
          subtext="Return date: (MM/DD)"
        />
        <StatusCard
          header="Penalty Imposed"
          text="Status"
          subtext="Cannot Borrow till Settled"
        />
      </div>
    </div>
  );
}

export default CustomerDashboard;
