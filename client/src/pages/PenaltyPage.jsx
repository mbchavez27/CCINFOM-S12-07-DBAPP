import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PenaltyEntry from "../components/PenaltyEntry";

function PenaltyPage() {
    return (
        <>
            <NavBar />
            <div className="min-h-screen py-24 flex flex-col gap-5 border-y-2 border-neutral-400 items-center justify-start">
                <h1 className="font-bold text-3xl">Penalty Record (Open)</h1>
                <table className="min-w-[85%] text-lg bg-white border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-600 tracking-wider">
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Laptop</th>
                            <th className="px-4 py-2">Staff</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Date Imposed</th>
                            <th className="px-4 py-2">Delete</th>
                            <th className="px-4 py-2">Resolve</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PenaltyEntry
                            penalty_id="1"
                            customer="Alec Nono"
                            laptop="Lenovo Thinkpad T480"
                            staff="Max Chavez"
                            issue="Hardware"
                            description="Battery"
                            resolved={false}
                        />
                    </tbody>
                </table>
                <h1 className="font-bold text-3xl">Penalty Record (Closed)</h1>
                <table className="min-w-[85%] text-lg bg-white border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-600 tracking-wider">
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Laptop</th>
                            <th className="px-4 py-2">Staff</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Date Imposed</th>
                            <th className="px-4 py-2">Date Resolved</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PenaltyEntry
                            penalty_id="1"
                            customer="Alec Nono"
                            laptop="Lenovo Thinkpad T480"
                            staff="Max Chavez"
                            issue="Hardware"
                            description="Battery"
                            resolved={true}
                        />
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default PenaltyPage;
