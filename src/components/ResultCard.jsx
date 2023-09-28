/* eslint-disable */
import React from "react";

const ResultCard = ({ image, title, desc }) => {
  return (
    <>
      <div className="border w-[80%] md:w-[20%] h-[auto] sm:h-[400px] flex justify-center p-5 bg-white">
        <div className="">
          <img className="w-[50%] gradient-font" src={image} alt="" />
          <div className="flex flex-col gap-3">
            <h1 className="text-bold">{title}</h1>
            <p className="text-[15px]">{desc}</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ResultCard;
