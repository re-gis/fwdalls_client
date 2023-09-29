/* eslint-disable */
import React from "react";
import ch from "../assets/images/ch.svg";

const SaidCardStd = ({ pic, text, name, bg }) => {
  return (
    <div className="h-[400px] border border-transparent gap-3 flex flex-col bg-white w-[20%] shadow-2xl shadow-gray-400 cursor-pointer">
      <div className={`bg-[${bg}]`}>
        <img src={pic} alt="" />
      </div>
      <h1 className="flex justify-center text-[15px] font-bold">{name}</h1>
      <p className="text-center font-[500] text-[12px] flex items-center justify-center px-5">
        {text}
      </p>
    </div>
  );
};

export default SaidCardStd;
