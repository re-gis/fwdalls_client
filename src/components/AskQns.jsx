/* eslint-disable */
import React from "react";
import image from "../assets/images/image 2.svg";
import QnsCard from "./QnsCard";

const AskQns = () => {
  return (
    <div className="md:relative h-[auto] w-[100%] sm:pb-[00px] md:pb-[350px] flex flex-col items-center">
      <div className="md:absolute w-[100%]">
        <img src={image} alt="" className="w-[100%]" />
      </div>

      <div className="md:absolute my-5 py-10  shadow-2xl shadow-[#919EAB] bg-[#F9FAFB] w-[80%] flex flex-col top-[350px] justify-center p-10">
        <div className="flex flex-col text-center items-center gap-5">
          <h1 className="flex justify-center text-center gradient-font text-[36px] font-bold">
            Frequently Asked Questions
          </h1>
          <h1 className="flex font-[Inter] justify-center text-[24px] font-[400] text-center">
            A series of questions that are commonly asked by customers and cover
            topics including the program, curriculum & content, enrolment &
            pricing, safety & privacy and more.
          </h1>
        </div>

        <div className="w-[100%] py-5 text-[16px] font-[600] font-[Inter]">
          <nav className="flex justify-center">
            <ul className="flex flex-col md:flex-row gap-10">
              <li className="gradient-underline cursor-pointer">General</li>
              <li className="gradient-underline cursor-pointer">
                Curriculum & Content
              </li>
              <li className="gradient-underline cursor-pointer">
                Enrolment & Pricing
              </li>
              <li className="gradient-underline cursor-pointer">
                Technical & Support
              </li>
              <li className="gradient-underline cursor-pointer">
                Safety & Privacy
              </li>
            </ul>
          </nav>
        </div>

        <div className="py-5 w-[100%] flex flex-col md:flex-row flex-wrap overflow-x-auto items-center justify-center gap-3">
          <QnsCard text={"What is Futurescool?"} />
          <QnsCard text={"Who can enroll in Futurescool?"} />
          <QnsCard text={"Why focus on soft skills and future technologies?"} />
          <QnsCard
            text={"How do you take advantage of the free trail lesson"}
          />
          <QnsCard text={"Do you have a referral program"} />
          <QnsCard text={"How do you handle refunds"} />
          <QnsCard text={"What times are classes available"} />
        </div>

        <div className="w-[100%] text-[16px] text-center font-[400]">
          <h1 className="justify-center gap-2">
            Still have questions? Get in touch using the <b className="cursor-pointer hover:underline">contact us</b> form
          </h1>
        </div>

        <div className="w-[100%] flex pt-10 justify-center">
          <button className="hover:bg-white hover:text-[#A842FF] w-[80%] sm:w-[60%] md:w-[40%] lg:w-[170px] border border-transparent text-white underline bg py-2 px-5 rounded-[20px] button gradient-border-btn">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQns;
