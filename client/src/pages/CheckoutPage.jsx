import { useLocation } from "react-router";
import Footer from "../components/Footer";
import LaptopCheckout from "../components/LaptopCheckout";
import NavBar from "../components/NavBar";
import { getLaptopByID } from "../services/laptop.services";
import { useEffect, useState } from "react";

function CheckoutPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [laptop, setLaptop] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchLaptop = async (laptop_id) => {
    setLoading(false);
    const res = await getLaptopByID(laptop_id);
    setLaptop(res.data.data);
    setLoading(true);
  };
  useEffect(() => {
    fetchLaptop(queryParams.get("laptop_id"));
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <LaptopCheckout
          laptop_id={laptop.laptop_id}
          laptop={laptop.product_name}
          os={laptop.product_os}
          batteryHealth={laptop.battery_health}
        />
      ) : (
        <>Loading...</>
      )}
      <Footer />
    </>
  );
}

export default CheckoutPage;
