/* eslint-disable */
import React from "react";
import rdmap from "../assets/images/mapsvg.svg";
import line from "../assets/images/OBJECTS.svg";

const RoadMap = () => {
  return (
    <div className="lg:relative flex flex-col px-[5%]">
      <div className="text-[36px] text-center font-bold mb-5 text-white">
        <h1 className="flex justify-center">
          Your Child's Learning Journey At Futurescool
        </h1>
      </div>
      <div className="hidden lg:flex relative justify-center p-10">
        {/* <img src={rdmap} className="w-[60%]" alt="" /> */}
        <img src={line} className="w-[60%] left-[310px] top-[70px] " />
      </div>

      <div className="flex sm:flex-row flex-col items-center gap-10 sm:gap-0 justify-around">
        <div className="lg:absolute lg:top-20 lg:left-[250px] sm:w-[30%] w-[80%] flex flex-col gap-5">
          <h1 className="gradient-font text-[30px] font-bold">
            6 Level Program
          </h1>
          <p className="text-gray-400 text-[18px]">
            Crafted with forward thinking, experiential teaching experts,
            Futurescool's curriculum was created to inspire young minds to
            become tomorrow's innovators and visionaries.
          </p>
        </div>
        <div className="lg:absolute lg:top-[400px] xl:left-[800px] xl:top-[500px] md:left-[500px] lg:left-[700px] sm:w-[30%] w-[80%]">
          <p className="text-[18px] text-gray-400">
            Futurescool's innovative programme presents fun and interactive live
            after-school classes designed to master the essential skills and
            technologies for your child to be successful in life, education and
            their professional careers.
          </p>
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-5 py-5">
        <h1 className="gradient-font text-[30px] flex items-center justify-center font-bold">
          Road Map
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center gap-10">
            <h1 className="border w-[100px] h-[100px] text-[15px] font-bold text-[#A842FF] flex justify-center items-center p-5 rounded-full">
              Level 1
            </h1>
            <p className="text-[20px] font-bold text-gray-400">
              Journey Starts
            </p>
          </div>

          <div className="flex items-center gap-10">
            <h1 className="border w-[100px] h-[100px] text-[15px] font-bold text-[#A842FF] flex justify-center items-center p-5 rounded-full">
              Level 2
            </h1>
            <div>
              <p className="text-gray-400 text-[20px] font-bold">
                Explorer Certification
              </p>
              <p className="text-gray-400 text-[15px] font-bold">
                17 Weeks into Program
              </p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <h1 className="border w-[100px] h-[100px] text-[15px] font-bold text-[#A842FF] flex justify-center items-center p-5 rounded-full">
              Level 3
            </h1>
          </div>

          <div className="flex items-center gap-10">
            <h1 className="border w-[100px] h-[100px] text-[15px] font-bold text-[#A842FF] flex justify-center items-center p-5 rounded-full">
              Level 4
            </h1>
            <div>
              <p className="text-gray-400 text-[20px] font-bold">
                Innovator certificate
              </p>
              <p className="text-gray-400 text-[15px] font-bold">
                34 Weeks into Program
              </p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <h1 className="border w-[100px] h-[100px] text-[15px] font-bold text-[#A842FF] flex justify-center items-center p-5 rounded-full">
              Level 5
            </h1>
          </div>

          <div className="flex items-center gap-10">
            <h1 className="border w-[100px] h-[100px] text-[15px] font-bold text-[#A842FF] flex justify-center items-center p-5 rounded-full">
              Level 6
            </h1>
            <div>
              <p className="text-gray-400 text-[20px] font-bold">
                Visionary certificate
              </p>
              <p className="text-gray-400 text-[15px] font-bold">
                54 Weeks into Program
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex pt-10 justify-center">
        <button className="gradient-underline-inverse lg:w-[170px] text-[14px] md:w-[40%] sm:w-[60%] w-[80%] hover:text-white hover:no-underline underline gradient-font border bg py-2 px-5 rounded-[20px] button gradient-border-btn">
          Book a Free Class
        </button>
      </div>
    </div>
  );
};

export default RoadMap;
