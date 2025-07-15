import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PenaltyInput from "../components/PenaltyInput";

function AddPenalty() {
    return (
        <>
            <NavBar />
            <PenaltyInput laptop={"Lenovo Thinkpad T480"} customer={"Alec Nono"} />
            <Footer />
        </>
    );
}

export default AddPenalty;
