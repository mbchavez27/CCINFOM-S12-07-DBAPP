import { useEffect, useState } from "react";
import { getIssues } from "../services/issues.service";
import { useIssues } from "../hooks/useIssues";

function TicketInput() {
  const { loading, issues } = useIssues();

  return (
    <>
      <div className="py-15 border-y-2 border-neutral-400 flex flex-col gap-5 items-center">
        <h1 className="font-bold text-2xl">Add Ticket</h1>
        <div className="w-[400px] flex flex-col gap-2">
          <p className="flex flex-col grow">
            <label htmlFor="laptop" className="ml-5">
              Laptop
            </label>
            <select
              id="laptop"
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              <option value={1}>Lenovo Thinkpad T480 | Arch Linux</option>
              <option value={1}>Lenovo Thinkpad T480 | Arch Linux</option>
              <option value={1}>Lenovo Thinkpad T480 | Arch Linux</option>
              <option value={1}>Lenovo Thinkpad T480 | Arch Linux</option>
            </select>
          </p>
          <p className="flex flex-col grow">
            <label htmlFor="staff" className="ml-5">
              Staff
            </label>
            <select
              id="staff"
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              <option value={1}>Max Chavez</option>
              <option value={1}>Max Chavez</option>
              <option value={1}>Max Chavez</option>
              <option value={1}>Max Chavez</option>
            </select>
          </p>
          <p className="flex flex-col grow">
            <label htmlFor="issue" className="ml-5">
              Issue
            </label>
            <select
              id="issue"
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              {loading
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
              required
            />
          </p>
          <button className="mt-10 py-2 text-neutral-50 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default TicketInput;
