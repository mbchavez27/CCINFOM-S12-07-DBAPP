function PenaltyEntry({
    penalty_id,
    customer,
    laptop,
    staff,
    issue,
    description,
    date_submitted,
    resolved,
}) {
    return (
        <tr className="hover:bg-gray-50">
            <td className="px-4 py-2">{penalty_id}</td>
            <td className="px-4 py-2">{customer}</td>
            <td className="px-4 py-2">{laptop}</td>
            <td className="px-4 py-2">{staff}</td>
            <td className="px-4 py-2">{issue}</td>
            <td className="px-4 py-2">{description}</td>
            <td className="px-4 py-2">
                {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </td>
            <td
                className={`px-4 py-2 text-center ${resolved == false ? "hidden" : ""}`}
            >
                {" "}
                {new Date(
                    new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
                ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
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
                    className={`bg-neutral-600 text-neutral-50 px-3 py-1 rounded-md ${resolved === true ? "hidden" : ""}`}
                >
                    Mark Resolved
                </button>
            </td>
        </tr>
    );
}

export default PenaltyEntry;
