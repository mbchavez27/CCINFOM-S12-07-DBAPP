import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LaptopCard from "../components/LaptopCard";

function LaptopInventory() {
    return (
        <>
            <NavBar />

            <div className="flex flex-col gap-5 px-50 py-10 border-y-2 border-neutral-300">
                <h1 className="font-bold text-4xl">Laptops</h1>
                <a href="/staff/laptops/add">
                    <button className="px-5 py-2 rounded-lg text-neutral-50 bg-neutral-800">
                        Add Laptop
                    </button>
                </a>
                <h1 className="text-red-600 font-bold text-2xl">In Use</h1>
                <div className="grid grid-cols-3 gap-10">
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                        in_use={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                        in_use={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                        in_use={true}
                    />
                </div>
                <h1 className="text-green-600 font-bold text-2xl">Available</h1>
                <div className="grid grid-cols-3 gap-10">
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                        in_use={false}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                        in_use={false}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                        in_use={false}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LaptopInventory;
