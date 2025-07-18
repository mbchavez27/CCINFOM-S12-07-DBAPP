import { useTopIssuePerMonth } from "../hooks/useTopIssuePerMonth.js";
import { useTopLaptopPerMonth } from "../hooks/useTopLaptopPerMonth.js";
import StatusCard from "./StatusCard";

function StaffDashboard() {
  const { topLaptopsLoading, topLaptops } = useTopLaptopPerMonth();
  const { topIssuesLoading, topIssues } = useTopIssuePerMonth();

  return (
    <div className="flex flex-col p-17.5">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <p className="text-lg text-neutral-600">Updates</p>
      </div>
      <div className="py-5 flex flex-col gap-4">
        <p className="text-xl text-neutral-600 font-semibold">Issues Reports</p>
        <div className="flex gap-10">
          {!topLaptopsLoading ? (
            <StatusCard
              header={topLaptops[0].issue_count}
              text={topLaptops[0].product_name}
              subtext="Top laptop with most reported issues per month"
            />
          ) : null}
          {!topIssuesLoading ? (
            <StatusCard
              header={topIssues[0].issue_count}
              text={topIssues[0].type + ", " + topIssues[0].category}
              subtext="Most common issue type per month"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default StaffDashboard;
