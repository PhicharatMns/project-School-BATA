import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative p-3 bg-sky-500">
      {/* เมนู Desktop */}
      <div className="text-white hidden md:block">
        <div className="flex justify-between">
          <div className="w-full sm:w-1/5 text-right font-black text-lg">
            <Link to={"/"}>School BTAD</Link>
          </div>
          <div className="w-full sm:w-3/5 flex justify-center gap-5">
            <Link to={"/about"}>เกี่ยวกับเรา</Link>
            <a href="/activities">ภาพรวมกิจกรรม</a>
            <a href="/courses">หลักสูตร</a>
            <a href="/academic">งานวิชาการ</a>
            <a href="/contact">ติดต่อเรา</a>
          </div>
        </div>
      </div>

      {/* ปุ่มเมนู Mobile */}
      <div className="flex justify-end text-white items-center gap-4 md:hidden">
        <div onClick={() => setOpen(!open)}>
          <IoMdMenu size={24} />
        </div>
      </div>

      {/* เมนู Mobile */}
      <ResponsiveMenu open={open} />
    </div>
  );
}
// import { IoMdMenu } from "react-icons/io";
// import { useState } from "react";
// import ResponsiveMenu from "./ResponsiveMenu";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="relative p-3 bg-sky-500">
//       {/* เมนู Desktop */}
//       <div className="text-white hidden md:block">
//         <div className="flex justify-between items-center">
//           <div className="w-full sm:w-1/5 text-right font-black text-lg">
//             School BTAD
//           </div>
//           <div className="w-full sm:w-3/5 flex justify-center gap-5">
//             <a href="/about" className="hover:underline">
//               เกี่ยวกับเรา
//             </a>
//             <a href="/activities" className="hover:underline">
//               ภาพรวมกิจกรรม
//             </a>
//             <a href="/courses" className="hover:underline">
//               หลักสูตร
//             </a>
//             <a href="/academic" className="hover:underline">
//               งานวิชาการ
//             </a>
//             <a href="/contact" className="hover:underline">
//               ติดต่อเรา
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ปุ่มเมนู Mobile */}
//       <div className="flex justify-end items-center gap-4 md:hidden">
//         <button
//           onClick={() => setOpen(!open)}
//           className="text-white "
//         >
//           <IoMdMenu size={24} />
//         </button>
//       </div>

//       {/* เมนู Mobile */}
//       <ResponsiveMenu open={open} />
//     </nav>
//   );
// }
