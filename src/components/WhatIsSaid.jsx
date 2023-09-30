/* eslint-disable */
import React, { useState } from "react";
import SaidCardStd from "./SaidCardStd";
import SaidCardPar from "./SaidCardPar";
import ch1 from "../assets/images/ch.svg";
import ch2 from "../assets/images/ch2.png";
import ch3 from "../assets/images/ch3.svg";
import ch4 from "../assets/images/ch4.svg";
import w1 from '../assets/images/w1.jpg'
import w2 from '../assets/images/w2.jpg'
import w3 from '../assets/images/w3.jpg'

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
      <div className="flex text-center md:text-left justify-center text-[36px] font-bold gradient-font">
        <h1>What parents & students are saying about Futurescool</h1>
      </div>

      <div className="flex items-center font-[500] justify-center gap-10 text-[16px]">
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
            <SaidCardPar
              name={"Anna Randera"}
              text={
                "Enrolling my sonin Futurescool's Finencial Literacy program was one of the best decisions I made for his future."
              }
              pic={w1}
            />
            <SaidCardPar
              name={"Notulu Lungu"}
              text={
                "Futurescool's emphasis on Critical Thinking and Problem Solving has made a remarkable impact on my daughter's academic performance."
              }
              pic={w2}
            />
            <SaidCardPar
              name={"Aisha Mohhamed"}
              text={
                "My daughter is not only excelling academically but she is also becoming more emotionally, intelligent, empathetic and socially aware. Futurescool's holistic approach to education is truly commendable."
              }
              pic={w3}
            />
            <SaidCardPar
              name={"Angus Young"}
              text={
                "I enrolled my son in Futurescool's Leadership and Management program hoping to instill valuable leadership skills in him. I'm thrilled with the progress he's made."
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WhatIsSaid;
