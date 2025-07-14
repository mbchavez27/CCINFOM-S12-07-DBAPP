import CustomerSignUp from "../components/CustomerSignUp";
import StaffSignUp from "../components/StaffSignUp";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";

function SignUpPage() {
  const [user, setUser] = useState("Customer");
  return (
    <>
      <NavBar />
      <div className="bg-[url(/hero.jpg)] h-screen flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Welcome!</h1>
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
        </div>
        <div className={`${user === "Customer" ? "" : "hidden"}`}>
          <CustomerSignUp />
        </div>
        <div className={`${user === "Staff" ? "" : "hidden"}`}>
          <StaffSignUp />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
