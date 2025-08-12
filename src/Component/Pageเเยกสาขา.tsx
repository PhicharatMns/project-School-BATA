import { useParams } from "react-router-dom";
import image from "../../data/image.json";

export default function Pageเเยกสาขา() {
  const { department } = useParams();

  // const numberIF = parseInt(id); ไม่ใช่เพราะไม่ได้ดึง ID
  // หาโดยใช้ string  โดยตรง
  const departments = image.find((event) => event.department === department);

  return (
    <div className=" h-fit container w-full  mx-auto p-2">
      <p className="lg:p-0 py-5 text-lg text-sky-500 font-black pl-3 ">
        เเนะนําสาขา {departments?.department}
      </p>
      <div className="border rounded-xl rounded-b border-black">
        <div className=" grid lg:grid-cols-4 grid-cols-2  lg:border-b rounded-t-xl bg-sky-500 border-black  text-center text-lg text-white font-bold ">
          <div className=" p-2 border-r-1 border-black border-b lg:border-b-0">
            สาขา {departments?.department} เรียนอะไร
          </div>
          <div className=" p-2 border-b lg:border-b-0 lg:border-r-1 border-black">สายงานในอนาคต</div>
          <div className="p-2 border-b border-r border-black lg:border-b-0 ">
            เทรนด์สาขา {departments?.department}
          </div>
          <div className=" p-2 border-b border-black lg:border-b-0">สกิลที่ได้รับ</div>
        </div>
        {/* data text department  */}
        <div className="grid lg:grid-cols-4 grid-cols-2 ">
          <div className=" p-2 border-r-1 border-black lg:border-b-0 border-b">
            <ul>
              {departments?.WhatYouWillLearn.map((event, index) => {
                return (
                  <li className="leading-9" key={index}>
                    {" "}
                    - {event}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" p-2 lg:border-r-1 border-black lg:border-b-0 border-b">
            {" "}
            <ul>
              {departments?.career_paths.map((event, index) => {
                return (
                  <li className=" leading-9" key={index}>
                    {" "}
                    - {event}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" p-2 border-r-1 border-black">
            {" "}
            <ul>
              {departments?.TrendsAndDeands.map((event, index) => {
                return (
                  <li className=" leading-9" key={index}>
                    {" "}
                    - {event}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" p-2 ">
            {" "}
            <ul>
              {departments?.skills.map((event, index) => {
                return (
                  <li className="leading-9" key={index}>
                    {" "}
                    - {event}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* image สาขา */}
      <div className="mx-auto ">
        <p className="text-xl text-sky-500 font-bold py-3 text-center">
          รูปภาพเเนะนําสาขา
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-3 lg:w-250 md:w-280 mx-auto">
          {departments?.image_department?.map((event, index) => {
            return (
              <div className="mx-auto" key={index}>
                <a target="_back" href={departments.facebook}>
                  <img
                    className=" object-center object-cover hover:shadow-lg hover:shadow-sky-500/40 h-130 w-fit rounded-xl hover:scale-102 duration-500 transform transition-all ease-initial"
                    src={event}
                    alt={event}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
