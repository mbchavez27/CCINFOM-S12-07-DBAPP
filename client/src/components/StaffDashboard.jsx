import { useTopIssuePerMonth } from "../hooks/useTopIssuePerMonth.js";
import { useTopLaptopPerMonth } from "../hooks/useTopLaptopPerMonth.js";
import StatusCard from "./StatusCard";
import ReportCard from "./ReportCard.jsx";
import { useTopStaffPerMonth } from "../hooks/useTopStaffPerMonth.js";
import { useMonthlyTickerPerStaff } from "../hooks/useMonthlyPerStaff.js";

function StaffDashboard() {
  const { topLaptopsLoading, topLaptops } = useTopLaptopPerMonth();
  const { topIssuesLoading, topIssues } = useTopIssuePerMonth();
  const { topStaffLoading, topStaff } = useTopStaffPerMonth();
  const { monthlyStaffLoading, monthlyStaff } = useMonthlyTickerPerStaff();

  return (
    <div className="flex flex-col p-17.5">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <p className="text-lg text-neutral-600">Updates</p>
      </div>
      <div className="py-5 flex flex-col gap-4">
        <p className="text-xl text-neutral-600 font-semibold">
          Tickets Reports
        </p>
        <div className="flex gap-10">
          {!topLaptopsLoading && topLaptops.length > 0 && (
            <ReportCard
              title="Top 5 laptops with most reported issues per month"
              rows={topLaptops}
              columns={[
                { label: "Month", key: "report_month" },
                { label: "Laptop", key: "product_name" },
                { label: "Issues", key: "issue_count" },
              ]}
            />
          )}
          {!topIssuesLoading && topIssues.length > 0 && (
            <ReportCard
              title="Most common issue type per month"
              rows={topIssues}
              columns={[
                { label: "Month", key: "issue_month" },
                { label: "Type", key: "type" },
                { label: "Category", key: "category" },
                { label: "Count", key: "issue_count" },
              ]}
            />
          )}
        </div>
      </div>
      <div className="py-5 flex flex-col gap-4">
        <p className="text-xl text-neutral-600 font-semibold">Staff Reports</p>
        <div className="flex gap-10">
          {!topStaffLoading && topStaff.length > 0 && (
            <ReportCard
              title="Top Staff with Most Tickets Assigned Per Month"
              rows={topStaff}
              columns={[
                { label: "Staff", key: "staff_name" },
                { label: "Ticket", key: "ticket_month" },
                { label: "Count", key: "ticket_count" },
              ]}
            />
          )}
          {!monthlyStaffLoading && monthlyStaff.length > 0 && (
            <ReportCard
              title="Monthly Average Daily Ticket Assignment per Staff"
              rows={monthlyStaff}
              columns={[
                { label: "Staff", key: "staff_name" },
                { label: "Month", key: "month" },
                { label: "Average Daily Tickets", key: "avg_daily_tickets" },
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffDashboard;
