/* eslint-disable */
import React from "react";
import girl from "../assets/images/girl.jpg";

const FutureProgramCard = () => {
  return (
    <div className="bg-[#181c27] text-white w-[20%] border-[#A842FF] border-[2px]">
      <div className="border-b border-[#A842FF] p-3 font-[400]">
        <h2 className="flex justify-center text-[20px] items-center">Basic</h2>
      </div>
      <div className="flex w-[100%] h-[100%] items-center justify-center gap-5 p-5 border-b border-[#A842FF]">
        <img
          className="rounded-full w-[20%] h-[45px] object-cover"
          src={girl}
          alt=""
        />
        <h1 className="text-[20px]">Explorer</h1>
      </div>
      <div className="border-b border-[#A842FF] flex flex-col gap-3 p-3">
        <div className="flex items-center justify-around">
          <p className="text-[15px] text-[#A842FF]">
            17 <span className="text-[12px] text-gray-400">weeks</span>
          </p>
          <p className="text-[12px] text-gray-400">
            levels <span className="text-[15px] text-[#A842FF]">1 & 2</span>
          </p>
        </div>

        <div className="flex items-center justify-around">
          <p className="text-[15px] gradient-font">
            10 <span className="text-[12px] text-gray-400">topics</span>
          </p>
          <p className="text-[15px] gradient-font">
            3 <span className="text-[12px] text-gray-400">skills</span>
          </p>
        </div>
      </div>
      <div className="text-gray-400 p-4">
        <h1 className="gradient-font text-[15px] font-bold">Topics</h1>
        <div className="text-[12px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            eveniet odio iste nostrum quibusdam similique pariatur tempore,
            veritatis ipsa doloremque veniam ab eaque distinctio, repudiandae
            quos exercitationem incidunt nulla dolorem?
          </p>
        </div>
      </div>

      <div className="text-gray-400 p-4">
        <h1 className="gradient-font text-[15px] font-bold">Skills</h1>
        <div className="text-[12px]">
          <p>Personal Development, Tech, Sciences</p>
        </div>
      </div>

      <div className="p-4">
        <button className="border border-none bg py-2 px-5 rounded-md flex items-center justify-center text-[12px] font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>

          <p>Explorer Certificate</p>
        </button>
      </div>

      <div>
        <ul>
          <li>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Certification
          </li>
          <li>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Person letter
            of recommendation
          </li>
          <li>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Career &
            industry talks
          </li>
          <li>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Lifetime
            alumni access
          </li>
          <li>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Peer-to-peer
            mentorship
          </li>
          <li>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Industry
            executive mentorship
          </li>
          <li>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Work
            experience / internship
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FutureProgramCard;
