function PenaltyInput({ laptop, customer }) {
    return (
        <>
            <div className="py-15 border-y-2 border-neutral-400 flex flex-col gap-5 items-center">
                <h1 className="font-bold text-2xl">Add Penalty</h1>
                <div className="w-[400px] flex flex-col gap-2">
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-bold text-xl">{laptop}</p>
                        <p className={` text-lg`}>Customer: {customer}</p>
                    </div>
                    <p className="flex flex-col grow">
                        <label htmlFor="staff" className="ml-5">
                            Staff
                        </label>
                        <select
                            id="staff"
                            className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
                        >
                            <option value="" disabled>
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
                            <option value={1}>Battery Issue</option>
                            <option value={1}>Battery Issue</option>
                            <option value={1}>Battery Issue</option>
                            <option value={1}>Battery Issue</option>
                            <option value={1}>Battery Issue</option>
                            <option value={1}>Battery Issue</option>
                            <option value={1}>Battery Issue</option>
                            <option value={1}>Battery Issue</option>
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

export default PenaltyInput;
