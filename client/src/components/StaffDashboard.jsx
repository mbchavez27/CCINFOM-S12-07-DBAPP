import StatusCard from "./StatusCard";

function StaffDashboard() {
    return (
        <div className="flex flex-col p-17.5">
            <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">Dashboard</h3>
                <p className="text-lg text-neutral-600">Updates</p>
            </div>
            <div className="py-5 flex gap-10">
                <StatusCard
                    header="0"
                    text="Status"
                    subtext="Cannot Borrow till Settled"
                />
                <StatusCard
                    header="0"
                    text="Status"
                    subtext="Cannot Borrow till Settled"
                />
                <StatusCard
                    header="0"
                    text="Status"
                    subtext="Cannot Borrow till Settled"
                />
            </div>
        </div>
    );
}

export default StaffDashboard;
