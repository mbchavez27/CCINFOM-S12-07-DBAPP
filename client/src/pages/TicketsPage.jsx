import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TicketCard from "../components/TicketCard";

function TicketsPage() {
    return (
        <>
            <NavBar />
            <div className="px-30 py-10 border-t-2 border-neutral-300">
                <a href="/staff/tickets/add">
                    <button className="px-5 py-2 mb-5 rounded-lg text-neutral-50 bg-neutral-800">
                        Add Ticket
                    </button>
                </a>
                <h1 className="font-bold text-3xl mb-10 text-red-600">Open Tickets</h1>
                <div className="grid grid-cols-3 gap-10">
                    <TicketCard
                        ticket_id="1"
                        laptop="Lenovo Thinkpad T480"
                        staff="Max Chavez"
                        issue="Hardware"
                        description="Broken Hinge"
                        date_submitted={new Date().toDateString()}
                        resolved={false}
                    />
                    <TicketCard
                        ticket_id="1"
                        laptop="Lenovo Thinkpad T480"
                        staff="Max Chavez"
                        issue="Hardware"
                        description="Broken Hinge"
                        date_submitted={new Date().toDateString()}
                        resolved={false}
                        is_penalty={true}
                        customer="Alec Nono"
                    />
                </div>
            </div>
            <div className="px-30 py-10 border-b-2 border-neutral-300">
                <h1 className="font-bold text-3xl mb-10 text-green-600">
                    Closed Tickets
                </h1>
                <div className="grid grid-cols-3 gap-10">
                    <TicketCard
                        ticket_id="1"
                        laptop="Lenovo Thinkpad T480"
                        staff="Max Chavez"
                        issue="Hardware"
                        description="Broken Hinge"
                        date_submitted={new Date().toDateString()}
                        resolved={true}
                    />
                    <TicketCard
                        ticket_id="1"
                        laptop="Lenovo Thinkpad T480"
                        staff="Max Chavez"
                        issue="Hardware"
                        description="Broken Hinge"
                        date_submitted={new Date().toDateString()}
                        resolved={true}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TicketsPage;
