//// กำหนดว่า props ต้องมี open เป็น boolean
export default function ResponsiveMenu({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-sky-500 text-white flex flex-col p-3 leading-10 z-10 duration-300
      ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <a href="/about">เกี่ยวกับเรา</a>
      <a href="/activities">ภาพรวมกิจกรรม</a>
      <a href="/courses">หลักสูตร</a>
      <a href="/academic">งานวิชาการ</a>
      <a href="/contact">ติดต่อเรา</a>
    </div>
  );
}

// export default function ResponsiveMenu({ open }: { open: boolean }) {
//   return (
//     <div
//       className={`absolute top-full left-0 w-full bg-sky-500 text-white flex flex-col p-3 leading-10 z-1 duration-300
//         ${
//           open
//             ? "opacity-100 translate-y-0 "
//             : "opacity-0 -translate-y-5"
//         }`}
//     >
//       <a href="/about" className="hover:underline py-1">
//         เกี่ยวกับเรา
//       </a>
//       <a href="/activities" className="hover:underline py-1">
//         ภาพรวมกิจกรรม
//       </a>
//       <a href="/courses" className="hover:underline py-1">
//         หลักสูตร
//       </a>
//       <a href="/academic" className="hover:underline py-1">
//         งานวิชาการ
//       </a>
//       <a href="/contact" className="hover:underline py-1">
//         ติดต่อเรา
//       </a>
//     </div>
//   );
// }
