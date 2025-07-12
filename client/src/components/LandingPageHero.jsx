import { useState } from "react";
import NameInput from "./NameInput";

function LandingPageHero() {
  const [user, setUser] = useState("Customer");

  return (
    <div className="bg-[url(/hero.jpg)] h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Nice to meet you again</h1>
        <div className="flex rounded-md-l">
          <div
            className={`bg-gray-900 text-neutral-50 rounded-l-xl w-75 py-3 text-lg text-center font-semibold 
                                    ${
                                      user === "Customer"
                                        ? "bg-gray-900/100 text-neutral-50/100"
                                        : "bg-gray-900/25 text-neutral-50/25"
                                    }`}
            onClick={() => setUser("Customer")}
          >
            Customer
          </div>
          <div
            className={`bg-gray-900 text-neutral-50 rounded-r-xl w-75 py-3 text-lg text-center font-semibold 
                                    ${
                                      user === "Staff"
                                        ? "bg-gray-900/100 text-neutral-50/100"
                                        : "bg-gray-900/25 text-neutral-50/25"
                                    }`}
            onClick={() => setUser("Staff")}
          >
            Staff
          </div>
        </div>
        <form action="/insert-path" method="post" className="flex flex-col">
          <NameInput />

          <button
            type="submit"
            className="mt-10 py-2 text-neutral-50 bg-blue-500 rounded-md"
          >
            Log In
          </button>
        </form>
        <p className="text-center">
          First time customer?{" "}
          <a className="text-blue-500" href="/signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LandingPageHero;
