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
import girl from "../assets/images/girl.svg";
import boy from "../assets/images/boy2.png";
import girl2 from "../assets/images/girl2.svg";
import ChildWillLearn from "../components/ChildWillLearn";
import RoadMap from "../components/RoadMap";
import CircularLoader from "../utils/CircularLoader";
import WhatIsSaid from "../components/WhatIsSaid";
import AskQns from "../components/AskQns";
import Footer from "../components/Footer";
import nice from '../assets/images/nice.svg'

const LandingPage = () => {
  return (
    <div className="flex flex-col gap landing pt-3 w-[100%]">
      <div className="w-[100%] px-[4%] h-[100%] text-white text-[12px] font-[500]">
        <div className=" w-[100%] h-[15%]">
          <NavBar />
        </div>

        <div className="flex items-center w-[100%] px-[4%] py-[5%] justify-between">
          <div className="flex flex-col sm:items-center md:items-stretch md:text-[100px] w-[100%] lg:w-[60%]">
            <h1 className="gradient-font text-[54px]">Futurescool</h1>
            <h2 className="text-[48px] justify-center flex flex-col">
              <span>Forging Stronger Futures.</span>
              <span>One Skill at a Time</span>
            </h2>

            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] flex flex-col">
                <span>
                  Revolutionising education and empowering the next generation{" "}
                </span>
                <span>
                  {" "}
                  of 8-18 year olds with essential soft skills and cutting-edge
                </span>
                <span>technologies to thrive in the digital age</span>
              </h3>

              <div className="text-[15px] flex flex-col sm:flex-row btn-container items-center gap-5">
                <button className="bg lg:w-[170px] sm:w-[40%] border bg py-2 px-5 underline rounded-[20px] button gradient-border-btn">
                  Schedule a Call
                </button>
                <button className="gradient-underline-inverse lg:w-[170px] underline sm:w-[40%] py-2 px-5 rounded-[20px]">
                  Book a Free Class
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-[40%] flex-wrap gap-10">
            <img src={nice} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center py-[5%] justify-center">
        <ShapingTomorrow />
      </div>

      <div className="flex flex-col w-[100%] py-[5%]">
        <div className="flex items-center justify-center">
          <h1 className="text-[30px] flex items-center justify-center font-bold text-white">
            Programs Designed to Deliver Results
          </h1>
        </div>
        <div className="w-[100%] gap-5 px-10 flex flex-col lg:flex-row lg:justify-center items-center pt-10">
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
        <div className="flex items-start justify-center py-10">
          <button className="text-white border border-[#242A3A] underline  bg py-2 px-5 lg:w-[170px] rounded-[100px] sm:w-[25%] md:w-[20%] hoverBtn">
            Schedule a Call
          </button>
        </div>
      </div>

      <div className="flex flex-col py-[5%] bg-white gap-10">
        <div className="flex justify-center items-center">
          <h1 className="text-[30px] font-bold gradient-font">
            Futurescool Program
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <FutureProgramCard
              title={"Basic"}
              role={"Explorer"}
              weeks={"17"}
              levels={"1 & 2"}
              topics={"10"}
              skills={"3"}
              mainTopic={
                "Financial Literacy, Communication Skills, Ai, Robotics, Collaboration & Teamwork, Software Engineering, Art of Interviewing, Critical Thinking & Problem Solving, Cyber Security & Online Safety"
              }
              mainSkill={"Personal Development, Tech, Sciences"}
              certs={"Explorer Certificate"}
              pic={girl}
              money={"825"}
            />
            <FutureProgramCard
              title={"Most Popular"}
              role={"Innovator"}
              weeks={"34"}
              levels={"1 - 4"}
              topics={"20"}
              skills={"6"}
              mainTopic={
                "Creativity & Innovation, Building Adaptability & Resilience, Self Worth & Confidence, Social Media & Mental Health, Entrepreneurship, ChatGPT, Blockchain Renewable Energy, Web 3, Smart Cities"
              }
              mainSkill={"Life Skills, Cognitive Skills, Digital Literacy"}
              certs={"Innovator Certificate"}
              pic={boy}
              money={"1950"}
            />
            <FutureProgramCard
              title={"Best Value"}
              role={"Visionary"}
              weeks={"54"}
              levels={"1 - 6"}
              topics={"30"}
              skills={"9"}
              mainTopic={
                "IQ & EQ, Leadership & Management, Diversity & Equality, Time Management, Conflict Management & Resolution, Crypto Currency, iOT, Quantum Computing, Biotechnology, Nanotechnology"
              }
              mainSkill={"Future Tech, Soft Skills, Financial Literacy"}
              certs={"Visionary Certificate"}
              pic={girl2}
              money={"3100"}
            />
          </div>
          <div className="flex justify-center items-center text-[16px] text-gray-600">
            <p className="text-center sm:text-left">
              *payment plans available, please ask for details
            </p>
          </div>
        </div>
      </div>

      <div className="py-[5%]">
        <RoadMap />
      </div>

      <div className="w-[100%] bg-white">
        <ChildWillLearn />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 py-[5%]">
        <h1 className="text-[36px] text-center sm:text-left font-bold text-white flex justify-center">
          Result We Deliver
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-center items-center">
          <CircularLoader
            percentage={94}
            text={"Students rate Futurescool experience as 'excellent'"}
          />
          <CircularLoader
            percentage={93}
            text={"Students would recommend Futurescool "}
          />
          <CircularLoader
            percentage={89}
            text={"Students said Futurscool is more fun & engaging than school"}
          />
          <CircularLoader
            percentage={95}
            text={"Parents say their child is more engaged at school "}
          />
          <CircularLoader
            percentage={82}
            text={"Parents say their child is more confident"}
          />
        </div>
        <div className="flex w-[100%] justify-center">
          <button className="gradient-underline-inverse lg:w-[170px] text-[14px] sm:w-[25%] hover:text-white underline hover:no-underline gradient-font border bg py-2 px-5 rounded-[20px] button gradient-border-btn">
            Schedule a Call
          </button>
        </div>
      </div>

      <div className="bg-white w-[100%] py-[5%]">
        <WhatIsSaid />
      </div>

      <div className="bg-white w-[100%] py-[10%] md:pb-[500px] pb-[700px]">
        <AskQns />
      </div>

      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
