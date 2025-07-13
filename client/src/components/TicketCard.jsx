function TicketCard({
  ticket_id,
  laptop,
  staff,
  issue,
  description,
  date_submitted,
  resolved,
}) {
  return (
    <div className="flex flex-col gap-5 p-5 border-2 border-neutral-400 rounded-lg ">
      <h2 className="text-xl font-bold">#{ticket_id}</h2>
      <div className="text-xl">
        <h3 className=" font-bold">{laptop}</h3>
        <h3 className="text-neutral-600">{staff}</h3>
      </div>
      <div className="text-neutral-600 font-semibold">
        <h6 className="">{issue}</h6>
        <h6>{description}</h6>
      </div>
      <h6>{date_submitted}</h6>
      <div
        className={`flex justify-around ${resolved === true ? "hidden" : ""}`}
      >
        <button className="px-5 py-2 rounded-lg text-neutral-50 bg-red-600">
          Delete Ticket
        </button>
        <button className="px-5 py-2 rounded-lg text-neutral-50 bg-neutral-800">
          Resolve Ticket
        </button>
      </div>
    </div>
  );
}

export default TicketCard;
