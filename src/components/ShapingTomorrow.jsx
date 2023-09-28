/* eslint-disable */
import React from "react";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";

const ShapingTomorrow = () => {
  return (
    <div className="flex flex-col gap-10 py-[5%]">
      <div className="flex flex-col items-center w-[100%]">
        <h1 className="text-[30px] font-bold gradient-font">
          Shapping Tomorrow
        </h1>
        <h3 className="font-[500]">
          The Futurescool approach to innovate learning
        </h3>
      </div>
      <div className="h-[100%] flex flex-wrap justify-center items-center gap-10">
        <img className="w-[20%] h-[250px] object-cover" src={p1} alt="" />
        <img className="w-[20%] h-[250px] object-cover" src={p2} alt="" />
        <img className="w-[20%] h-[250px] object-cover" src={p3} alt="" />
        <img className="w-[20%] h-[250px] object-cover" src={p4} alt="" />
      </div>

      <div className="flex items-start justify-center">
        <button className="text-white underline bg border border-none bg py-2 px-5 rounded-[20px] button gradient-border-btn">
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default ShapingTomorrow;
