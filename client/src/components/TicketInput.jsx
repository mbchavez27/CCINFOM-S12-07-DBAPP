import { useState } from "react";
import { useIssues } from "../hooks/useIssues";
import { useLaptops } from "../hooks/useDropDownLaptop";
import { useStaff } from "../hooks/useStaff";
import { addTickets } from "../services/tickets.services";
import { useNavigate } from "react-router";

function TicketInput() {
  const { issueLoading, issues } = useIssues();
  const { staffLoading, staff } = useStaff();

  const { laptops, fetchLaptops, loading: laptopLoading } = useLaptops();

  const [description, setDescription] = useState("");
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [selectedStaff, setStaff] = useState({});
  const [selectedIssue, setIssue] = useState({});
  const dateToday = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();

  return (
    <>
      <div className="py-15 border-y-2 border-neutral-400 flex flex-col gap-5 items-center">
        <h1 className="font-bold text-2xl">Add Ticket</h1>
        <div className="w-[400px] flex flex-col gap-2">
          <div className="flex flex-col grow">
            <label htmlFor="laptop" className="ml-5">
              Laptop
            </label>
            <div
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400 max-h-40 overflow-y-auto"
              onScroll={(e) => {
                const el = e.currentTarget;
                if (el.scrollTop + el.clientHeight >= el.scrollHeight - 5) {
                  fetchLaptops();
                }
              }}
            >
              <div className="text-neutral-500 mb-1">
                {selectedLaptop
                  ? `${selectedLaptop.product_name} | ${selectedLaptop.product_os}`
                  : "Select your option"}
              </div>

              {laptops.map((laptop, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-md"
                  onClick={() => {
                    setSelectedLaptop(laptop);
                  }}
                >
                  {laptop.product_name} | {laptop.product_os}
                </div>
              ))}

              {laptopLoading && (
                <div className="text-sm text-neutral-400 py-1 px-2">
                  Loading more...
                </div>
              )}
            </div>
          </div>

          <p className="flex flex-col grow">
            <label htmlFor="staff" className="ml-5">
              Staff
            </label>
            <select
              id="staff"
              value={selectedStaff}
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
              onChange={(e) => {
                setStaff(parseInt(e.target.value));
              }}
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              {!staffLoading
                ? staff.map((staffs, index) => {
                    return (
                      <option key={index} value={staffs.staff_id}>
                        {staffs.first_name + " " + staffs.last_name}
                      </option>
                    );
                  })
                : null}
            </select>
          </p>
          <p className="flex flex-col grow">
            <label htmlFor="issue" className="ml-5">
              Issue
            </label>
            <select
              id="issue"
              value={selectedIssue}
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
              onChange={(e) => {
                setIssue(parseInt(e.target.value));
              }}
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              {!issueLoading
                ? issues.map((issue, index) => {
                    return (
                      <option key={index} value={issue.issue_id}>
                        {issue.category}
                      </option>
                    );
                  })
                : null}
            </select>
          </p>
          <p className="flex flex-col grow">
            <label htmlFor="description" className="ml-5">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </p>
          <button
            className="mt-10 py-2 text-neutral-50 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md"
            onClick={async () => {
              if (
                selectedLaptop &&
                selectedStaff &&
                selectedIssue &&
                description &&
                dateToday
              ) {
                try {
                  const newTicket = await addTickets(
                    selectedLaptop.laptop_id,
                    selectedStaff,
                    selectedIssue,
                    description,
                    dateToday
                  );

                  if (newTicket.status === 201) {
                    alert("Add ticket successful");
                    navigate("/staff/tickets");
                  } else {
                    alert("Add ticket unsuccessful");
                  }
                } catch (error) {
                  console.error("Failed to add ticket:", error);
                  alert("Server error: Could not add ticket (500)");
                }
              } else {
                alert("Please complete all fields.");
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default TicketInput;
