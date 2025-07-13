import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import ClientView from "./pages/ClientView";
import BorrowPage from "./pages/BorrowPage";
import CheckoutPage from "./pages/CheckoutPage";
import StaffView from "./pages/StaffView";
import TicketsPage from "./pages/TicketsPage";
import LaptopInventory from "./pages/LaptopInventory";
import AddLaptop from "./pages/AddLaptop";
import RecordList from "./pages/RecordList";

function App() {
    return (
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
                    <Route path="tickets" element={<TicketsPage />} />
                    <Route path="records" element={<RecordList />} />
                </Route>
                <Route path="client">
                    <Route index element={<ClientView />} />
                    <Route path="browse">
                        <Route index element={<BorrowPage />} />
                        <Route path="checkout" element={<CheckoutPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
