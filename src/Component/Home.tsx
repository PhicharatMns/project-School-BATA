import { useState } from "react";
import sldes from "../../data/sldes.json";
import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import image from "../../data/image.json";
import imageActivity from "../../data/imgageActivity.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true, //เเสดงรอบเดียวเท่านั้น
    });
  }, []);

  const [current, setcurrent] = useState(0);

  const prevSlde = () => {
    const isprve = current === 0;
    const prvcindex = isprve ? sldes.length - 1 : current - 1;
    setcurrent(prvcindex);
  };

  const nexttoslde = () => {
    const isnexttoslde = current === sldes.length - 1;
    const nextIndex = isnexttoslde ? 0 : current + 1;
    setcurrent(nextIndex);
  };

  return (
    <div className="">
      <div className=" pt-5 lg:w-full lg:p-0 p-6 ">
        <div
          className=" relative w-full  h-205 bg-cover bg-bottom duration-500"
          style={{ backgroundImage: `url(${sldes[current].image})` }}
        >
          {/* button to perv */}
          <button
            className="border p-5 bg-black/40 rounded-4xl left-5  text-white absolute  top-[50%]"
            onClick={prevSlde}
          >
            <BiChevronsLeft />
          </button>
          {/* button to next */}
          <button
            className="border p-5 bg-black/40 rounded-4xl right-5 absolute  top-[50%] text-white"
            onClick={nexttoslde}
          >
            <BiChevronsRight />
          </button>
        </div>
        <div>
          {/* ส่วน2 */}
          <div className="max-w-280 mx-auto ">
            <p className="py-5 text-sky-500 font-bold text-2xl">
              หลักสูตร ประกาศนียบัตรวิชาชีพ
            </p>
            <div
              data-aos="zoom-in-left"
              className="grid grid-cols-2 md:grid-cols-3 gap-5"
            >
              {image.map((event, index) => {
                return (
                  <div key={index} className="relative   ">
                    <Link to={`image/${event.department}`}>
                      {" "}
                      <img
                        className="lg:w-150  hover:shadow-lg hover:shadow-sky-500/40 hover:scale-105 duration-300 lg:hd-120 h-80 object-cover object-center rounded-4xl"
                        src={event.image}
                        alt=""
                      />
                      <p className="absolute bottom-3 left-2 text-white bg-sky-500 p-1.5 rounded-4xl">
                        {event.department}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-b-2 pt-5 border-sky-500"></div>

          <div data-aos="zoom-in" className="lg:w-230 mx-auto">
            <p className="text-center text-white bg-sky-500 w-fit mx-auto text-2xl font-bold p-2  m-4 rounded-2xl">
              ระเบียบการรับสมัคร
            </p>
            <div className="grid lg:grid-cols-2 gap-5  ">
              <div className="border leading-8 rounded-xl p-5 border-sky-500">
                <p className="text-sky-500 lg:text-lg  font-black text-center">
                  หลักสูตร ประกาศนียบัตรวิชาชีพ ( ปวช. )
                </p>
                <p className=" pl-1 "> - ระดับมัธยมศึกษาตอนต้น ( ม.3 )</p>
                <p className=" pl-1">
                  - การศึกษานอกโรงเรียน ระดับ มัธยมศึกษาตอนต้น ( กศน.ม.3 )
                </p>
              </div>
              <div className="border leading-9  rounded-xl p-5 border-sky-500">
                <p className="text-sky-500 lg:text-lg font-black text-center">
                  {" "}
                  หลักสูตร ประกาศนียบัตรวิชาชีพชั้นสูง( ปวส. )
                </p>
                <p className=" pl-1 "> - ระดับมัธยมศึกษาตอนปลาย ( ม.6 )</p>
                <p className=" pl-1 ">
                  - ประกาศนียบัตรวิชาชีพ ( ปวช. ) ทุกสาขา
                </p>
                <p className=" pl-1 ">
                  - การศึกษานอกโรงเรียนระดับมัธยมศึกษาตอนปลาย(กศน. ม.6)
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 pt-5 border-sky-500"></div>
          {/* ภาพรวมกิจกรรม */}
          <div>
            <div className=" lg:w-280 mx-auto">
              <p className="py-5 text-sky-500 text-2xl font-black underline">
                ภาพรวมกิจกรรม
              </p>
              <div className="grid lg:grid-cols-4  grid-cols-2 gap-5  ">
                {imageActivity.map((event, index) => {
                  return (
                    <div className="">
                      <img
                        className="object-center object-cover  lg:h-full h-50 rounded-xl  hover:scale-105 duration-300 ease-in-out hover:shadow-xl transform transition"
                        src={event.imgage}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
