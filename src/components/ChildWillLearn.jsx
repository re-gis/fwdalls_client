/* eslint-disable */
import React from "react";
import classPic from "../assets/images/class.jpg";
import LearnCard from "./LearnCard";
import Problem from "../assets/images/Problem.svg";
import Structure from "../assets/images/Structure.svg";
import Thinking from "../assets/images/Thinking.svg";
import Thinking2 from "../assets/images/Thinking2.svg";
import Union from "../assets/images/Union.svg";
import Comm from "../assets/images/Communication.svg";
import Emp from "../assets/images/Emp.svg";
import Confidence from "../assets/images/Confidence.svg";
import Grit from "../assets/images/Grit.svg";
import Logics from "../assets/images/Logicsvg.svg";

const ChildWillLearn = () => {
  return (
    <div className="relative h-auto md:h-[900px]  bg-white-400 flex flex-col items-center">
      <div className="w-[100%] hidden md:block absolute bg-blue-400 h-[40%]">
        <img
          src={classPic}
          className="h-[100%] w-[100%] object-cover "
          alt=""
        />
      </div>
      <div className="md:absolute my-5 md:py-0 bg-blue-50 w-[80%] flex flex-col top-[30%] justify-center p-10">
        <div className="flex flex-col text-center items-center gap-5">
          <h1 className="flex justify-center text-center gradient-font text-[30px] font-bold">
            Your Child Will Learn
          </h1>
          <h1 className="flex justify-center text-[17px] text-center">
            Cultivating these skills is a vital mission at Futurescool.
            Together, these skills form a robust foundation for your child's
            personal and education success. They empower children to adapt to
            changing circumstances, thrive in diverse environments and make
            positive contributions to society.
          </h1>
        </div>

        <div className="py-5 flex flex-col md:flex-row flex-wrap overflow-x-auto items-center justify-center gap-3">
          <LearnCard icon={Thinking} title={"Critical thinking"} />
          <LearnCard icon={Structure} title={"Structure"} />
          <LearnCard icon={Confidence} title={"Confidence"} />
          <LearnCard icon={Comm} title={"Communication skills"} />
          <LearnCard icon={Grit} title={"Grit"} />
          <LearnCard icon={Logics} title={"Logic"} />
          <LearnCard icon={Thinking2} title={"Creative thinking"} />
          <LearnCard icon={Problem} title={"Problem solving"} />
          <LearnCard icon={Union} title={"Resiliency"} />
          <LearnCard icon={Emp} title={"Empathy"} />
        </div>
      </div>
    </div>
  );
};

export default ChildWillLearn;