import Footer from "../components/Footer";
import LaptopCheckout from "../components/LaptopCheckout";
import NavBar from "../components/NavBar";

function CheckoutPage() {
    return (
        <>
            <NavBar />
            <LaptopCheckout
                laptop="Lenovo Thinkpad T480"
                os="Arch Linux"
                batteryHealth="100"
            />
            <Footer />
        </>
    );
}

export default CheckoutPage;
