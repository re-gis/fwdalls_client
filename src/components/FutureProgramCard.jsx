/* eslint-disable */
import React from "react";
import MultiDigitCounter from "../NumberCounter";

const FutureProgramCard = ({
  title,
  role,
  weeks,
  levels,
  topics,
  skills,
  mainTopic,
  mainSkill,
  certs,
  pic,
  money,
}) => {
  return (
    <div className="bg-[#181c27] text-white w-[80%] md:w-[30%] border-[#A842FF] h-[100%] border-[2px]">
      <div className="border-b border-[#A842FF] p-3 font-[400]">
        <h2 className="flex justify-center text-[20px] items-center">
          {title}
        </h2>
      </div>
      <div className="flex w-[100%] h-[100%] items-center justify-center gap-5 p-5 border-b border-[#A842FF]">
        <img
          className="rounded-full w-[20%] md:w-[30%] h-[50px] sm:h-[100px] object-fill md:object-cover"
          src={pic}
          alt=""
        />
        <h1 className="text-[20px]">{role}</h1>
      </div>
      <div className="border-b border-[#A842FF] flex flex-col gap-3 p-3">
        <div className="flex items-center justify-around">
          <p className="text-[15px] flex items-center text-[#A842FF]">
            <MultiDigitCounter target={weeks} duration={1000} />{" "}
            <span className="text-[11px] text-gray-400">weeks</span>
          </p>
          <p className="text-[11px] text-gray-400">
            levels <span className="text-[15px] text-[#A842FF]">{levels}</span>
          </p>
        </div>

        <div className="flex items-center justify-around">
          <p className="text-[15px] flex items-center gradient-font">
            <MultiDigitCounter target={topics} duration={1000} />{" "}
            <span className="text-[11px] text-gray-400">topics</span>
          </p>
          <p className="text-[15px] gradient-font flex items-center">
            <MultiDigitCounter target={skills} duration={1000} /> <span className="text-[11px] text-gray-400">skills</span>
          </p>
        </div>
      </div>
      <div className="text-gray-400 p-4">
        <h1 className="gradient-font text-[15px] font-bold">Topics</h1>
        {role === "Explorer" && (
          <>
            <p className="text-[12px] text-[#181c27] font-bold">Nothing</p>
          </>
        )}
        {role === "Innovator" && (
          <>
            <p className="text-[12px] font-bold">Explorer +</p>
          </>
        )}

        {role === "Visionary" && (
          <>
            <p className="text-[12px] font-bold">Innovator +</p>
          </>
        )}
        <div className="text-[11px]">
          <p>{mainTopic}</p>
        </div>
      </div>

      <div className="text-gray-400 p-4">
        <h1 className="gradient-font text-[15px] font-bold">Skills</h1>
        {role === "Explorer" && (
          <>
            <p className="text-[12px] text-[#181c27] font-bold">Nothing</p>
          </>
        )}
        {role === "Innovator" && (
          <>
            <p className="text-[12px] font-bold">Explorer +</p>
          </>
        )}

        {role === "Visionary" && (
          <>
            <p className="text-[12px] font-bold">Innovator +</p>
          </>
        )}
        <div className="text-[11px]">
          <p>{mainSkill}</p>
        </div>
      </div>

      <div className="p-4">
        <button className="border w-[100%] bg py-2 px-5 button rounded-md flex gap-2 items-center justify-center text-[11px] font-bold">
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

          <p>{certs}</p>
        </button>
      </div>

      <div className="px-4">
        <ul className="flex flex-col text-[11px] text-gray-400">
          <li className="flex gap-2 text-[11px]">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>Certification</span>
          </li>
          <li className="flex gap-2 text-[11px]">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>Person letter</span>
            of recommendation
          </li>
          <li className="flex gap-2 text-[11px]">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>Career & industry talks</span>
          </li>
          <li className="flex gap-2 text-[11px]">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>Lifetime alumni access</span>
          </li>
          <li className="flex gap-2 text-[11px]">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>Peer-to-peer mentorship</span>
          </li>
          <li className="flex gap-2 text-[11px]">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>Industry executive mentorship</span>
          </li>
          <li className="flex gap-2 text-[11px]">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <span>Work experience / internship</span>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <button className="border w-[100%] gradient-underline-inverse py-3 px-5 rounded-md flex gap-2 items-center justify-center text-[11px] font-bold">
          £<MultiDigitCounter target={money} duration={1000} />
        </button>
      </div>
    </div>
  );
};

export default FutureProgramCard;
