import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import ClientView from "./pages/ClientView";
import BorrowPage from "./pages/BorrowPage";
import CheckoutPage from "./pages/CheckoutPage";
import StaffView from "./pages/StaffView";
import TicketPage from "./pages/TicketPage";
import LaptopInventory from "./pages/LaptopInventory";
import AddLaptop from "./pages/AddLaptop";
import RecordList from "./pages/RecordList";
import AddTicket from "./pages/AddTicket";
import AddPenalty from "./pages/AddPenalty";
import PenaltyPage from "./pages/PenaltyPage";
import BorrowHistory from "./pages/BorrowHistory";

function App() {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="staff">
            <Route index element={<StaffView />} />
            <Route path="laptops">
              <Route index element={<LaptopInventory />} />
              <Route path="add" element={<AddLaptop />} />
            </Route>
            <Route path="tickets">
              <Route index element={<TicketPage />} />
              <Route path="add" element={<AddTicket />} />
            </Route>
            <Route path="records">
              <Route index element={<RecordList />} />
              <Route path="penalty" element={<AddPenalty />} />
            </Route>
            <Route path="penalties" element={<PenaltyPage />} />
          </Route>
          <Route path="client">
            <Route index element={<ClientView />} />
            <Route path="browse">
              <Route index element={<BorrowPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
            </Route>
            <Route path="history" element={<BorrowHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
