import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TicketInput from "../components/TicketInput";

function AddPenalty() {
    return (
        <>
            <NavBar />
            <TicketInput
                laptop={"Lenovo Thinkpad T480"}
                staff={"Max Chavez"}
                customer={"Alec Nono"}
                is_penalty={true}
            />
            <Footer />
        </>
    );
}

export default AddPenalty;
