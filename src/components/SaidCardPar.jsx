/* eslint-disable */
import React from "react";

const SaidCardPar = ({ bg, pic, text, name }) => {
  return (
    <>
      <div className="h-[600px] border border-transparent gap-3 flex flex-col bg-white w-[80%] md:w-[20%] shadow-2xl shadow-gray-400 cursor-pointer">
        <div className={`bg-[${bg}] flex items-center justify-center h-[50%]`}>
          <img
            src={pic}
            alt=""
            className="h-[100%] object-fill md:object-cover w-[100%] bg-[#7DA866]"
          />
        </div>
        <h1 className="flex justify-center text-[20px] font-bold">{name}</h1>
        <p className="text-center font-[500] text-[18px] flex items-center justify-center px-5">
          {text}
        </p>
      </div>
    </>
  );
};

export default SaidCardPar;
