import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Pageเเยกสาขา from "./Component/Pageเเยกสาขา";
import { FaPhoneAlt } from "react-icons/fa";
import ScrollToTop from "./Component/ScrollToTop";
import Footer from "./Component/Footer";
import About from "./About";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ScrollToTop /> {/* อันนี่ใช่เมื่อ กดลิ้งเเล้ว ไม่ล๊อคอยุ่ ข้างบนสุด */}
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
