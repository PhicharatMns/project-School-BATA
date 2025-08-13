import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Pageเเยกสาขา from "./Component/Pageเเยกสาขา";

import Footer from "./Component/Footer";
import About from "./Component/About";
import ScrollToHash  from './Component/ScrollToHash'

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ScrollToHash />
        <Navbar />
        {/* BrowserRouter to Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image/:department" element={<Pageเเยกสาขา />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>{" "}
    </div>
  );
}
