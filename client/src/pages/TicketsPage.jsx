import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TicketCard from "../components/TicketCard";

function TicketsPage() {
  return (
    <>
      <NavBar />
      <div className="px-30 py-10 border-t-2 border-neutral-300">
        <h1 className="font-bold text-3xl mb-10 text-red-600">
          Ongoing Tickets
        </h1>
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
