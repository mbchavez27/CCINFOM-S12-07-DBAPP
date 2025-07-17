import { closePenalty, deletePenalty } from "../services/penalty.services";
import { useNavigate } from "react-router";

function PenaltyEntry({
  penalty_id,
  customer,
  laptop,
  staff,
  issue,
  category,
  date_submitted,
  date_lifted,
  resolved,
}) {
  const navigate = useNavigate();
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
        {date_lifted}
      </td>
      <td
        className={`px-4 py-2 text-center ${resolved == true ? "hidden" : ""}`}
      >
        <button
          className={`bg-red-600 text-neutral-50 px-3 py-1 rounded-md`}
          onClick={async () => {
            const choice = confirm("Are you sure you want delete this penalty");

            if (choice) {
              const response = await deletePenalty(penalty_id);
              alert(response.data.message);
              navigate(0);
            }
          }}
        >
          Delete
        </button>
      </td>
      <td
        className={`px-4 py-2 text-center ${resolved == true ? "hidden" : ""}`}
      >
        <button
          className={`bg-neutral-600 text-neutral-50 px-3 py-1 rounded-md`}
          onClick={async () => {
            const today = new Date().toISOString().split("T")[0];
            const choice = confirm(
              "Are you sure you want to resolve the penalty?"
            );

            if (!choice) return;

            try {
              const response = await closePenalty(today, penalty_id);
              if (response.status === 201) {
                alert("Penalty closed successfully");
                navigate(0);
              } else {
                alert("Failed to close the penalty");
              }
            } catch (error) {
              console.error("Close ticker error: ", error);
              alert(
                "Server error while closing ticket.\n " +
                  (error.response?.data?.error || "Unexpected error")
              );
            }
          }}
        >
          Mark Resolved
        </button>
      </td>
    </tr>
  );
}

export default PenaltyEntry;
