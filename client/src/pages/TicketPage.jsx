import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TicketEntry from "../components/TicketEntry";

function TicketPage() {
    return (
        <>
            <NavBar />
            <div className="min-h-screen py-24 flex flex-col gap-5 border-y-2 border-neutral-400 items-center justify-start">
                <h1 className="font-bold text-3xl">Ticket Record (Open)</h1>
                <a href="/staff/tickets/add">
                    <button className="px-6 py-2 bg-neutral-800 rounded-lg text-lg text-neutral-50">
                        Add Ticket
                    </button>
                </a>
                <table className="min-w-[85%] text-lg bg-white border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-600 tracking-wider">
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Laptop</th>
                            <th className="px-4 py-2">Staff</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Date Created</th>
                            <th className="px-4 py-2">Delete</th>
                            <th className="px-4 py-2">Resolve</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <TicketEntry
                            ticket_id={"1"}
                            laptop={"Lenovo Thinkpad T480"}
                            staff={"Max Chavez"}
                            type={"Hardware"}
                            category={"Battery"}
                            resolved={false}
                        />
                    </tbody>
                </table>
                <h1 className="font-bold text-3xl">Ticket Record (Closed)</h1>
                <table className="min-w-[85%] text-lg bg-white border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-600 tracking-wider">
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Laptop</th>
                            <th className="px-4 py-2">Staff</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Date Created</th>
                            <th className="px-4 py-2">Date Closed</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <TicketEntry
                            ticket_id={"1"}
                            laptop={"Lenovo Thinkpad T480"}
                            staff={"Max Chavez"}
                            type={"Hardware"}
                            category={"Battery"}
                            resolved={true}
                        />
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default TicketPage;
