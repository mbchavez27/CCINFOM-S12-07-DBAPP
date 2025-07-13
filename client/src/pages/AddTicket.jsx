import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AddTicket() {
    return (
        <>
            <NavBar />
            <div className="py-15 border-y-2 border-neutral-400 flex flex-col gap-5 items-center">
                <h1 className="font-bold text-2xl">Add Ticket</h1>
                <div className="w-[400px] flex flex-col gap-2">
                    <p className="flex flex-col grow">
                        <label htmlFor="college" className="ml-5">
                            College
                        </label>
                        <select
                            id="college"
                            value={college}
                            className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
                            onChange={(e) => {
                                setCollege(e.target.value);
                            }}
                        >
                            <option value="" disabled hidden>
                                Select your option
                            </option>
                            <option value="CCS">College of Computer Studies</option>
                            <option value="GCOE">College of Engineering</option>
                            <option value="COS">College of Science</option>
                            <option value="RVRCOB">College of Business</option>
                            <option value="CLA">College of Liberal Arts</option>
                            <option value="BAGCED">College of Education</option>
                            <option value="SOE">School of Economics</option>
                            <option value="TDSOL">School of Law</option>
                        </select>
                    </p>
                    <p className="flex flex-col grow">
                        <label htmlFor="product-os" className="ml-5">
                            Product OS
                        </label>
                        <input
                            type="text"
                            id="product-os"
                            className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
                            required
                        />
                    </p>
                    <p className="flex flex-col grow">
                        <label htmlFor="battery-health" className="ml-5">
                            Battery Health (1-100)
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="100"
                            id="battery-health"
                            className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
                            required
                        />
                    </p>

                    <button className="mt-10 py-2 text-neutral-50 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md">
                        Submit
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddTicket;
