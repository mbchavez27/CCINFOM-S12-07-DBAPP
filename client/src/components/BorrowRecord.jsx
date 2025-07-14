function BorrowRecord({ returned }) {
    return (
        <tr className="hover:bg-gray-50">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Lenovo Thinkpad T480</td>
            <td className="px-4 py-2">Alec Nono</td>
            <td className="px-4 py-2">Max Chavez</td>
            <td className="px-4 py-2">Insert date</td>
            <td className="px-4 py-2">Insert date</td>
            <td className="px-4 py-2">No</td>
            <td className="px-4 py-2">{returned == true ? "Yes" : "No"}</td>
            <td className="px-4 py-2">No</td>
            <td className="px-4 py-2 text-center">
                <button className="bg-red-600 text-neutral-50 px-3 py-1 rounded-md">
                    Add Penalty
                </button>
            </td>
            <td className="px-4 py-2 text-center">
                <button
                    className={`bg-neutral-600 text-neutral-50 px-3 py-1 rounded-md ${returned === true ? "hidden" : ""}`}
                >
                    Mark Returned
                </button>
            </td>
        </tr>
    );
}

export default BorrowRecord;
