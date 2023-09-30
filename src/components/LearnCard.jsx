/* eslint-disable */
import React from "react";
import s5 from "../assets/images/s5.svg";

const LearnCard = ({ icon, title }) => {
  return (
    <div className="flex border bg-white items-center border-gray-300 p-3 w-[100%] sm:w-[80%] justify-between md:w-[35%] rounded-sm">
      <div className="flex items-center gap-2">
        <img src={icon} alt="" className="w-[24px]" />
        <h2 className="text-[18px] font-[500]">{title}</h2>
      </div>
      <div className="w-[auto] border border-transparent rounded-full hover:bg-gray-300">
        <img src={s5} alt="" className="w-[15px] cursor-pointer" />
      </div>
    </div>
  );
};

export default LearnCard;
