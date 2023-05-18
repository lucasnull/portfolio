import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FloatMenu from "../components/FloatMenu.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/sobre-mim" element={<About />} />
      </Routes>
      <FloatMenu />
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;
