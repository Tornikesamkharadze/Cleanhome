import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import StandartClean from "./components/StandartClean";
import GeneralCleaning from "./components/GeneralCleaning";
import CraftsMan from "./pages/CraftsMan";
import UserOrders from "./pages/UserOrders";
import { FooterWithSocialLinks } from "./components/Footer";
import TestRegister from "./pages/TestRegister";
import TestLogin from "./pages/TestLogin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <Routes>
          <Route index="/" element={<HomePage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/category/general/order" element={<GeneralCleaning />} />
          <Route path="/category/standart/order" element={<StandartClean />} />
          <Route path="/category/craftsman/order" element={<CraftsMan />} />
          <Route path="/user_orders" element={<UserOrders />} />
          <Route path="/register" element={<TestRegister />} />
          <Route path="/login" element={<TestLogin />} />
        </Routes>
      </BrowserRouter>
      <FooterWithSocialLinks />
    </>
  );
}

export default App;
