import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LaptopCard from "../components/LaptopCard";

function LaptopInventory() {
    return (
        <>
            <NavBar />

            <div className="px-50 py-10 border-y-2 border-neutral-300">
                <h1 className="font-bold text-4xl mb-10">Laptops</h1>
                <a href="/staff/laptops/add">
                    <button className="mb-5 px-5 py-2 rounded-lg text-neutral-50 bg-neutral-800">
                        Add Laptop
                    </button>
                </a>
                <div className="grid grid-cols-3 gap-10">
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                    <LaptopCard
                        laptop="Lenovo Thinkpad T480"
                        os="Arch Linux"
                        batteryHealth="100"
                        staff_view={true}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LaptopInventory;
