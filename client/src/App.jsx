import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import ClientView from "./pages/ClientView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/client">
          <Route index element={<ClientView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
