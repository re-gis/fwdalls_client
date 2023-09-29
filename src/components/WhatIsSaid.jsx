/* eslint-disable */
import React, { useState } from "react";
import SaidCardStd from "./SaidCardStd";
import SaidCardPar from "./SaidCardPar";
import ch1 from "../assets/images/ch.svg";
import ch2 from "../assets/images/ch2.svg";
import ch3 from "../assets/images/ch3.svg";
import ch4 from "../assets/images/ch4.svg";

const WhatIsSaid = () => {
  const [change, setChange] = useState(1);

  const handleChangeStudent = (e) => {
    e.preventDefault();
    setChange(1);
  };

  const handleChangeParent = (e) => {
    e.preventDefault();
    setChange(2);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex text-center md:text-left justify-center text-[30px] font-bold gradient-font">
        <h1>What parents & students are saying about Futurescool</h1>
      </div>

      <div className="flex items-center font-[500] justify-center gap-10 text-[15px]">
        <h2
          onClick={handleChangeStudent}
          className="gradient-underline cursor-pointer"
        >
          Students
        </h2>
        <h2
          onClick={handleChangeParent}
          className="gradient-underline cursor-pointer"
        >
          Parents
        </h2>
      </div>

      <div className="w-[100%] flex-col flex md:flex-row gap-5 items-center justify-center">
        {change === 1 ? (
          <>
            <SaidCardStd
              bg={"#7DA866"}
              pic={ch1}
              text={
                "Learning robotics at Futurescool has been a blast! I never thought I could build my own robot, but now I can, and it moves and follows commands!"
              }
              name={"Kai R"}
            />
            <SaidCardStd
              bg={"#ED7041"}
              pic={ch2}
              text={
                "Futurescool's Creativity & Innovation class has helped me become more imaginative and think outside the box."
              }
              name={"Annabella R"}
            />
            <SaidCardStd
              bg={"#F6CD60"}
              pic={ch3}
              text={
                "Studying AI at Futurescool has been mind-blowing! I get to teach computers how to think and learn just like humans do."
              }
              name={"Themba L"}
            />
            <SaidCardStd
              bg={"#7DCBE1"}
              pic={ch4}
              text={
                "Futurescool's class on Building Adaptability & Resilience has been super helpful. I used to get nervous when things didn't go as planned, but now I know how to adapt and bounce back."
              }
              name={"Rubeena"}
            />
          </>
        ) : (
          <>
            <SaidCardPar />
          </>
        )}
      </div>
    </div>
  );
};

export default WhatIsSaid;
