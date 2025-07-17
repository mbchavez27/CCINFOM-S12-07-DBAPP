import { useNavigate } from "react-router";
import { useIssues } from "../hooks/useIssues";
import { useStaff } from "../hooks/useStaff";
import { useState } from "react";
import { addPenalty } from "../services/penalty.services";

function PenaltyInput({ borrow, borrow_id }) {
  const { staffLoading, staff } = useStaff();
  const [selectedStaff, setStaff] = useState({});
  const { issueLoading, issues } = useIssues();
  const [selectedIssue, setIssue] = useState({});
  const [description, setDescription] = useState("");
  const dateToday = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  return (
    <>
      <div className="py-15 border-y-2 border-neutral-400 flex flex-col gap-5 items-center">
        <h1 className="font-bold text-2xl">Add Penalty</h1>
        <div className="w-[400px] flex flex-col gap-2">
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-bold text-xl">{borrow.product_name}</p>
            <p className={` text-lg`}>Customer: {borrow.customer_name}</p>
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
                borrow.customer_id &&
                borrow.laptop_id &&
                selectedStaff &&
                selectedIssue &&
                description &&
                dateToday
              ) {
                try {
                  const newPenalty = await addPenalty(
                    borrow_id,
                    borrow.customer_id,
                    borrow.laptop_id,
                    selectedStaff,
                    selectedIssue,
                    description,
                    dateToday
                  );
                  console.log(newPenalty);
                  if (newPenalty.status == 201) {
                    alert("Add penalty successful");
                    navigate("/staff/records");
                  } else {
                    alert("Add penalty unsuccessful");
                  }
                } catch (error) {
                  console.error("Failed to add penalty: ", error);
                  alert("Server error: Could not add penalty (500)");
                }
              } else {
                alert("Please complete all fields");
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

export default PenaltyInput;
