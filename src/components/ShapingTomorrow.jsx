/* eslint-disable */
import React from "react";
import classPic from "../assets/images/classPic.jpg";

const ShapingTomorrow = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 px-[5%] justify-between w-[80%]">
      <div className="flex flex-col w-[100%] h-[100%] gap-5 lg:w-[50%]">
        <h1 className=" text-[30px] md:text-[36px] font-bold gradient-font">
           The Futurescool approach to innovate learning
        </h1>

        <p className="text-[24px]">
          Futurescool, born from tech industry leaders and visionary educators,
          inspires young minds to become future innovators. Our interactive
          after-school program, for ages 8-18, covers personal development,
          digital literacy, and more, using cutting-edge methods like
          Problem-Based Learning, Havard's Case Study approach, and Google's
          Moonshot framework. Empower your child for success in education,
          career and personal growth with us.
        </p>
      </div>
      <div className="w-[100%] lg:w-[50%]">
        <h2 className="absolute hidden sm:block text-center text-[26px] ml-32 mt-48 font-semibold text-white">Shaping Tommorrow</h2>
        <img
          className="w-[100%] sm:w-[538px] h-[453px] opacity-85 px-5 sm:px-0  object-contain sm:object-cover"
          src={classPic}
          alt="backgrround"
        />
      </div>
    </div>
  );
};

export default ShapingTomorrow;
