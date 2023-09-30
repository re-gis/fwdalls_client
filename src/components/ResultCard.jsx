/* eslint-disable */
import React from "react";

const ResultCard = ({ image, title, desc }) => {
  return (
    <>
      <div className="border w-[80%] lg:w-[20%] h-[auto] sm:h-[450px] flex justify-center p-5 bg-white">
        <div className="flex flex-col gap-2">
          <img className="w-[50%] gradient-font" src={image} alt="" />
          <div className="flex flex-col gap-3">
            <h1 className="text-bold text-[20px]">{title}</h1>
            <p className="text-[18px]">{desc}</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ResultCard;
