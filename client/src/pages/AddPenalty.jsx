import { useLocation } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PenaltyInput from "../components/PenaltyInput";
import { useEffect, useState } from "react";
import { getBorrowedLaptopsByID } from "../services/borrow.services";

function AddPenalty() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [borrow, setBorrow] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchBorrow = async (laptop_id) => {
    setLoading(true);
    const res = await getBorrowedLaptopsByID(laptop_id);
    setBorrow(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBorrow(queryParams.get("borrow_id")), [];
  }, []);

  return (
    <>
      <NavBar />
      {!loading ? (
        <PenaltyInput
          borrow={borrow}
          borrow_id={queryParams.get("borrow_id")}
        />
      ) : null}
      <Footer />
    </>
  );
}

export default AddPenalty;
