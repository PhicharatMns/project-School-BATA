import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center mt-5 bg-sky-500/60 p-5 ">
      <p>วิทยาลัยอาชีวศึกษาเทคนิคบริหารธุรกิจกรุงเทพ</p>
      <div className="flex items-center justify-center ">
        <FaPhoneAlt />{" "}
        <p className="pl-3 ">0-2311-2339 , 0-2311-6810 , 0-2332-0252</p>
      </div>
      <p> 88 ซอยสุขุมวิท 73 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพฯ 10260</p>
      <hr />
      <div className="pt-5 text-xl  font-black">
        <a target="_blank" href="https://github.com/PhicharatMns">
          Created by github Phicharat Mn
        </a>
      </div>
    </footer>
  );
}
