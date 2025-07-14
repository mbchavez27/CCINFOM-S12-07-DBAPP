import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { addLaptops } from "../services/laptop.services";
import { useNavigate } from "react-router";

function AddLaptop() {
  const [name, setName] = useState("");
  const [os, setOs] = useState("");
  const [health, setHealth] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="py-15 border-y-2 border-neutral-400 flex flex-col gap-5 items-center">
        <h1 className="font-bold text-2xl">Add Laptop</h1>
        <div className="w-[400px] flex flex-col gap-2">
          <p className="flex flex-col grow">
            <label htmlFor="laptop-name" className="ml-5">
              Product Name
            </label>
            <input
              type="text"
              id="laptop-name"
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full border-2 border-neutral-400"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </p>
          <p className="flex flex-col grow">
            <label htmlFor="product-os" className="ml-5">
              Product OS
            </label>

            <select
              id="product-os"
              value={os}
              className="bg-neutral-50 p-3 rounded-md mt-1 inset-shadow-neutral-900 w-full"
              onChange={(e) => {
                setOs(e.target.value);
              }}
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              <option value="Windows">Windows</option>
              <option value="MacOS">MacOS</option>
              <option value="Linux">Linux</option>
            </select>
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
              onChange={(e) => {
                setHealth(e.target.value);
              }}
            />
          </p>

          <button
            className="mt-10 py-2 text-neutral-50 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-md"
            onClick={async () => {
              if ((name, os, health)) {
                const newLaptop = await addLaptops(name, os, health);
                console.log(newLaptop);
                if (newLaptop.status == 201) {
                  navigate("/staff/laptops");
                }
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddLaptop;
