function PenaltyEntry({
  penalty_id,
  customer,
  laptop,
  staff,
  issue,
  category,
  date_submitted,
  date_resolved,
  resolved,
}) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2">{penalty_id}</td>
      <td className="px-4 py-2">{customer}</td>
      <td className="px-4 py-2">{laptop}</td>
      <td className="px-4 py-2">{staff}</td>
      <td className="px-4 py-2">{issue}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2">{date_submitted}</td>
      <td
        className={`px-4 py-2 text-center ${resolved == false ? "hidden" : ""}`}
      >
        {date_resolved}
      </td>
      <td
        className={`px-4 py-2 text-center ${resolved == true ? "hidden" : ""}`}
      >
        <button className={`bg-red-600 text-neutral-50 px-3 py-1 rounded-md`}>
          Delete
        </button>
      </td>
      <td
        className={`px-4 py-2 text-center ${resolved == true ? "hidden" : ""}`}
      >
        <button
          className={`bg-neutral-600 text-neutral-50 px-3 py-1 rounded-md ${
            resolved === true ? "hidden" : ""
          }`}
        >
          Mark Resolved
        </button>
      </td>
    </tr>
  );
}

export default PenaltyEntry;
