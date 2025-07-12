import CustomerHero from "../components/CustomerHero";
import CustomerDashboard from "../components/CustomerDashboard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function ClientView() {
  return (
    <>
      <NavBar />
      <CustomerHero firstName="Skibidi" lastName="Toilet" />
      <CustomerDashboard />
      <Footer />
    </>
  );
}

export default ClientView;
