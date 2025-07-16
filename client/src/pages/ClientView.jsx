import { useEffect } from "react";
import { useCookies } from "react-cookie";
import NavBar from "../components/NavBar";
import CustomerHero from "../components/CustomerHero";
import CustomerDashboard from "../components/CustomerDashboard";
import Footer from "../components/Footer";

function ClientView() {
  const [cookies] = useCookies(["user"]);

  const firstName = cookies.user?.data.first_name || "";
  const lastName = cookies.user?.data.last_name || "";
  return (
    <>
      <NavBar />
      <CustomerHero firstName={firstName} lastName={lastName} />
      <CustomerDashboard customer_id={cookies.user?.data.customer_id} />
      <Footer />
    </>
  );
}

export default ClientView;
