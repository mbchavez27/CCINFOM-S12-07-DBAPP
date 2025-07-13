import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StaffDashboard from "../components/StaffDashboard";
import StaffHero from "../components/StaffHero";

function StaffView() {
    return (
        <>
            <NavBar />
            <StaffHero />
            <StaffDashboard />
            <Footer />
        </>
    );
}

export default StaffView;
