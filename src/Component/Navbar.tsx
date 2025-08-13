import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative p-3 bg-sky-500" aria-label="Primary Navigation">
      {/* เมนู Desktop */}
      <div className="text-white hidden md:block">
        <div className="flex justify-between items-center">
          <div className="w-full sm:w-1/5 text-right font-black text-lg">
            <Link to="/">School BTAD</Link>
          </div>
          <div className="w-full sm:w-3/5 flex justify-center gap-5">
            <Link to="/about">เกี่ยวกับเรา</Link>
            <Link to="/#activities">ภาพรวมกิจกรรม</Link>
            <Link to="/#courses">หลักสูตร</Link>
          </div>
        </div>
      </div>

      {/* ปุ่มเมนู Mobile */}
      <div className="flex justify-end items-center gap-4 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-white"
        >
          <IoMdMenu size={24} />
        </button>
      </div>

      {/* เมนู Mobile */}
      <ResponsiveMenu open={open} />
    </nav>
  );
}
