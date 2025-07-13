import Footer from "../components/Footer";
import LaptopCard from "../components/LaptopCard";
import NavBar from "../components/NavBar";

function BorrowPage() {
  return (
    <>
      <NavBar />
      <div className="px-50 py-10 border-y-2 border-neutral-300">
        <h1 className="font-bold text-4xl mb-10">Laptops</h1>
        <div className="grid grid-cols-3 gap-10">
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
          <LaptopCard
            laptop="Lenovo Thinkpad T480"
            os="Arch Linux"
            batteryHealth="100"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BorrowPage;
