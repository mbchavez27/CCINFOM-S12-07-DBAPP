import { useTopIssuePerMonth } from '../hooks/useTopIssuePerMonth.js'
import { useTopLaptopPerMonth } from '../hooks/useTopLaptopPerMonth.js'
import StatusCard from './StatusCard'
import ReportCard from './ReportCard.jsx'
import { useTopStaffPerMonth } from '../hooks/useTopStaffPerMonth.js'
import { useMonthlyTickerPerStaff } from '../hooks/useMonthlyPerStaff.js'
import {
  useGetAverageLaptopPerMonth,
  useGetCollegeDailyBorrowing,
  useGetCollegeMonthlyBorrowing,
  useGetTotalLaptopPerDay,
} from '../hooks/analtyics.hooks.js'

function StaffDashboard() {
  const { topLaptopsLoading, topLaptops } = useTopLaptopPerMonth()
  const { topIssuesLoading, topIssues } = useTopIssuePerMonth()
  const { topStaffLoading, topStaff } = useTopStaffPerMonth()
  const { monthlyStaffLoading, monthlyStaff } = useMonthlyTickerPerStaff()
  const { monthlyCollegeLoading, monthlyColleges } =
    useGetCollegeMonthlyBorrowing()
  const { dailyCollegeLoading, dailyColleges } = useGetCollegeDailyBorrowing()
  const { totalLaptopLoading, totalLaptop } = useGetTotalLaptopPerDay()
  const { averageLaptopLoading, averageLaptop } = useGetAverageLaptopPerMonth()

  return (
    <div className="flex flex-col p-17.5">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">Dashboard</h3>
        <p className="text-lg text-neutral-600">Updates</p>
      </div>
      <div className="grid grid-cols-2">
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
                  { label: 'Month', key: 'report_month' },
                  { label: 'Laptop', key: 'product_name' },
                  { label: 'Issues', key: 'issue_count' },
                ]}
              />
            )}
            {!topIssuesLoading && topIssues.length > 0 && (
              <ReportCard
                title="Most common issue type per month"
                rows={topIssues}
                columns={[
                  { label: 'Month', key: 'issue_month' },
                  { label: 'Type', key: 'type' },
                  { label: 'Category', key: 'category' },
                  { label: 'Count', key: 'issue_count' },
                ]}
              />
            )}
          </div>
        </div>
        <div className="py-5 flex flex-col gap-4">
          <p className="text-xl text-neutral-600 font-semibold">
            Staff Reports
          </p>
          <div className="flex gap-10">
            {!topStaffLoading && topStaff.length > 0 && (
              <ReportCard
                title="Top Staff with Most Tickets Assigned Per Month"
                rows={topStaff}
                columns={[
                  { label: 'Staff', key: 'staff_name' },
                  { label: 'Ticket', key: 'ticket_month' },
                  { label: 'Count', key: 'ticket_count' },
                ]}
              />
            )}
            {!monthlyStaffLoading && monthlyStaff.length > 0 && (
              <ReportCard
                title="Monthly Average Daily Ticket Assignment per Staff"
                rows={monthlyStaff}
                columns={[
                  { label: 'Staff', key: 'staff_name' },
                  { label: 'Month', key: 'month' },
                  { label: 'Average Daily Tickets', key: 'avg_daily_tickets' },
                ]}
              />
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="py-5 flex flex-col gap-4">
          <p className="text-xl text-neutral-600 font-semibold">
            Customer Reports
          </p>
          <div className="flex gap-10">
            {!monthlyCollegeLoading && monthlyColleges.length > 0 && (
              <ReportCard
                title="Monthly Laptop Borrowing Duration per College"
                rows={monthlyColleges}
                columns={[
                  { label: 'College', key: 'college' },
                  {
                    label: 'Average Monthly Borrowing Duration',
                    key: 'avg_monthly_borrowing_duration',
                  },
                ]}
              />
            )}
            {!dailyCollegeLoading && dailyColleges.length > 0 && (
              <ReportCard
                title="College with Highest Daily Borrowing"
                rows={dailyColleges}
                columns={[
                  { label: 'Colleges', key: 'college' },
                  {
                    label: 'Average Daily Borrowing',
                    key: 'avg_daily_borrows',
                  },
                ]}
              />
            )}
          </div>
        </div>
        <div className="py-5 flex flex-col gap-4">
          <p className="text-xl text-neutral-600 font-semibold">
            Laptop Reports
          </p>
          <div className="flex gap-10">
            {!totalLaptopLoading && totalLaptop.length > 0 && (
              <ReportCard
                title="Total number of laptop borrows per day, based on pickup records"
                rows={totalLaptop}
                columns={[
                  { label: 'PickUp Date', key: 'pickup_date' },
                  { label: 'Number of Borrows', key: 'no_of_borrows' },
                ]}
              />
            )}
            {!averageLaptopLoading && averageLaptop.length > 0 && (
              <ReportCard
                title="Monthly Average Daily Ticket Assignment per Staff"
                rows={averageLaptop}
                columns={[
                  { label: 'Month', key: 'month' },
                  { label: 'Average Daily Borrows', key: 'avg_daily_borrows' },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffDashboard
