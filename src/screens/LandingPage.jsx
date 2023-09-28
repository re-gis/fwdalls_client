/* eslint-disable */
import React from "react";
import NavBar from "../components/NavBar";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import s1 from "../assets/images/s1.svg";
import s2 from "../assets/images/s2.svg";
import s3 from "../assets/images/s3.svg";
import s4 from "../assets/images/s4.svg";
import ShapingTomorrow from "../components/ShapingTomorrow";
import ResultCard from "../components/ResultCard";
import FutureProgramCard from "../components/FutureProgramCard";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col gap-10 landing py-3">
      <div className="w-[100%] px-[4%] h-[100%] text-white text-[12px] font-[500]">
        <div className=" w-[100%] h-[15%]">
          <NavBar />
        </div>

        <div className="flex items-center w-[100%] px-[4%] justify-between">
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

      <div className="bg-white ">
        <ShapingTomorrow />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <h1 className="text-[30px] font-bold text-white">
            Programs Designed to Deliver Results
          </h1>
        </div>
        <div className="w-[100%] gap-5 flex justify-center items-center pt-10">
          <ResultCard
            image={s1}
            title={"Live Tutoring"}
            desc={"Undivided attention for unrivalled learning outcomes"}
          />
          <ResultCard
            image={s2}
            title={"100% Personalised Learning"}
            desc={
              "Technology that adapts to every learner's needs and designed to be fun, interactive and immerse"
            }
          />
          <ResultCard
            image={s3}
            title={"World-class curriculum"}
            desc={
              "Proven pedagogy, designed by subject matter experts from world of education, technology & business"
            }
          />
          <ResultCard
            image={s4}
            title={"Complete conceptual clarity"}
            desc={
              "Expert tutors, giving engaging live online sessions with an interactive hands-on learning experience"
            }
          />
        </div>
      </div>

      <div className="flex flex-col py-[5%] bg-white">
        <div className="flex justify-center items-center">
          <h1 className="text-[30px] font-bold gradient-font">Futurescool Program</h1>
        </div>
        <div>
          <FutureProgramCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
