/* eslint-disable */
import React from "react";

const SaidCardPar = ({ bg, pic, text, name }) => {
  return (
    <>
      <div className="h-[400px] border border-transparent gap-3 flex flex-col bg-white w-[80%] md:w-[20%] shadow-2xl shadow-gray-400 cursor-pointer">
        <div className={`bg-[${bg}] flex items-center justify-center`}>
          <img src={pic} alt="" />
        </div>
        <h1 className="flex justify-center text-[15px] font-bold">{name}</h1>
        <p className="text-center font-[500] text-[12px] flex items-center justify-center px-5">
          {text}
        </p>
      </div>
    </>
  );
};

export default SaidCardPar;
