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
import girl from "../assets/images/girl.jpg";
import ChildWillLearn from "../components/ChildWillLearn";
import RoadMap from "../components/RoadMap";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap landing py-3 w-[100%]">
      <div className="w-[100%] px-[4%] h-[100%] text-white text-[12px] font-[500]">
        <div className=" w-[100%] h-[15%]">
          <NavBar />
        </div>

        <div className="flex items-center w-[100%] px-[4%] py-[5%] justify-between">
          <div className="flex flex-col text-[50px] sm:items-center md:items-stretch md:text-[100px] w-[100%] lg:w-[60%]">
            <h1 className="gradient-font">Futurescool</h1>
            <h2 className="text-[40px] justify-center flex flex-col">
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

              <div className="text-[15px] flex flex-col sm:flex-row btn-container items-center gap-5">
                <button className="bg w-[60%] sm:w-[40%] border bg py-2 px-5 rounded-[20px] button gradient-border-btn">
                  Schedule a Call
                </button>
                <button className="gradient-underline-inverse w-[60%] sm:w-[40%] py-2 px-5 rounded-[20px]">
                  Book a Free Class
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-[40%] flex-wrap gap-10">
            <div className="w-[30%] h-[250px] border rounded-[40px]">
              <img
                src={p1}
                className="h-[100%] w-[100%] rounded-[40px] object-cover"
                alt=""
              />
            </div>
            <div className="w-[25%] h-[120px] border rounded-tl-full rounded-bl-full rounded-br-full">
              <img
                className="h-[100%] w-[100%] rounded-tl-full rounded-bl-full rounded-br-full object-cover"
                src={p2}
                alt=""
              />
            </div>
            <div className="w-[25%] h-[120px] border rounded-tr-full rounded-br-full rounded-tl-full">
              <img
                className="h-[100%] w-[100%] rounded-tr-full rounded-br-full rounded-tl-full object-cover"
                src={p3}
                alt=""
              />
            </div>
            <div className="w-[30%] h-[250px] border rounded-[40px]">
              <img
                className="h-[100%] w-[100%] rounded-[40px] object-cover"
                src={p4}
                alt=""
              />
            </div>
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
        <div className="w-[100%] gap-5 px-10 flex flex-col sm:flex-row sm:justify-center items-center pt-10">
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
          <button className="text-white border border-[#242A3A]  bg py-2 px-5 rounded-[100px] sm:w-[25%] md:w-[20%] hoverBtn">
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
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
              pic={girl}
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
              pic={girl}
              money={"3100"}
            />
          </div>
          <div className="flex justify-center items-center text-[12px] text-gray-600">
            <p>*payment plans available, please ask for details</p>
          </div>
        </div>
      </div>

      <div className="py-[5%]">
        <RoadMap />
      </div>

      <div className="w-[100%] bg-white">
        <ChildWillLearn />
      </div>
    </div>
  );
};

export default LandingPage;
