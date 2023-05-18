import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Navbar from "../components/Navbar.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/sobre-mim" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
