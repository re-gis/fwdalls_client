/* eslint-disable */
import React from "react";
import NavBar from "../components/NavBar";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import ShapingTomorrow from "../components/ShapingTomorrow";

const LandingPage = () => {
  return (
    <div className="w-full landing py-3">
      <div className="w-[100%] px-[4%] pb-[10%] h-[100%] text-white text-[12px] font-[500]">
        <div className=" w-[100%] h-[15%]">
          <NavBar />
        </div>

        <div className="flex items-center w-[100%] px-10 justify-between">
          <div className="flex flex-col text-[100px] w-[50%]">
            <h1 className="gradient-font">Futurescool</h1>
            <h2 className="text-[40px] flex flex-col">
              <span>Forging Stronger Futures.</span>
              <span>One Skill at a Time</span>
            </h2>

            <div className="flex flex-col gap-5">
              <h3 className="text-[15px] flex flex-col">
                <span>
                  Revolutionising education and empowering the next generation{" "}
                </span>
                <span>
                  {" "}
                  of 8-18 year olds with essential soft skills and cutting-edge
                </span>
                <span>technologies to thrive in the digital age</span>
              </h3>

              <div className="text-[15px] flex items-center gap-5">
                <button className="gradient-underline bg border border-none bg py-2 px-5 rounded-[20px] button gradient-border-btn">
                  Schedule a Call
                </button>
                <button className="gradient-underline-inverse py-2 px-5 rounded-[20px]">
                  Book a Free Class
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[50%] flex-wrap gap-10">
            <div className="flex w-[100%] justify-end gap-5">
              <div className="w-[18%] h-[150px] border rounded-[40px]">
                <img
                  src={p1}
                  className="h-[100%] w-[100%] rounded-[40px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-[15%] h-[90px] border rounded-tl-full rounded-bl-full rounded-br-full">
                <img
                  className="h-[100%] w-[100%] rounded-tl-full rounded-bl-full rounded-br-full object-cover"
                  src={p2}
                  alt=""
                />
              </div>
            </div>
            <div className="flex w-[100%] justify-end gap-5">
              <div className="w-[15%] h-[90px] border rounded-tr-full rounded-br-full rounded-tl-full">
                <img
                  className="h-[100%] w-[100%] rounded-tr-full rounded-br-full rounded-tl-full object-cover"
                  src={p3}
                  alt=""
                />
              </div>
              <div className="w-[18%] h-[150px] border rounded-[40px]">
                <img
                  className="h-[100%] w-[100%] rounded-[40px] object-cover"
                  src={p4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <ShapingTomorrow />
      </div>
    </div>
  );
};

export default LandingPage;
