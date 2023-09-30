/* eslint-disable */
import React from "react";
import MultiDigitCounter from "../utils/NumberCounter";
import cert from '../assets/images/award-check.svg'
import check from "../assets/images/check.png";
import falsee from "../assets/images/false.png";

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
    <div className="bg-[#181c27] text-white w-[80%] lg:w-[30%] border-[#A842FF] h-[100%] border-[2px]">
      <div className="border-b border-[#A842FF] p-3 font-[400]">
        <h2 className="flex justify-center text-[24px] items-center">
          {title}
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row w-[100%] h-[100%] items-center justify-center gap-5 p-5 border-b border-[#A842FF]">
        <img
          className="rounded-full w-[120px] h-[120px]  object-fill md:object-cover"
          src={pic}
          alt=""
        />
        <h1 className="text-[36px] font-[400]">{role}</h1>
      </div>
      <div className="border-b border-[#A842FF] flex flex-col gap-3 p-3">
        <div className="flex items-center justify-around">
          <p className="text-[24px] flex items-center text-[#A842FF]">
            <MultiDigitCounter target={weeks} duration={1000} />{" "}
            <span className="text-[20px] text-gray-400">weeks</span>
          </p>
          <p className="text-[20px] text-gray-400">
            levels <span className="text-[24px] text-[#A842FF]">{levels}</span>
          </p>
        </div>

        <div className="flex items-center justify-around">
          <p className="text-[24px] flex items-center gradient-font">
            <MultiDigitCounter target={topics} duration={1000} />{" "}
            <span className="text-[20px] text-gray-400">topics</span>
          </p>
          <p className="text-[24px] gradient-font flex items-center">
            <MultiDigitCounter target={skills} duration={1000} />{" "}
            <span className="text-[20px] text-gray-400">skills</span>
          </p>
        </div>
      </div>
      <div className="text-gray-400 p-4">
        <h1 className="gradient-font text-[15px] font-bold">Topics</h1>
        {role === "Explorer" && (
          <>
            <p className="text-[18px] text-[#181c27] font-bold">Nothing</p>
          </>
        )}
        {role === "Innovator" && (
          <>
            <p className="text-[18px] font-bold">Explorer +</p>
          </>
        )}

        {role === "Visionary" && (
          <>
            <p className="text-[18px] font-bold">Innovator +</p>
          </>
        )}
        <div className="text-[16px]">
          <p>{mainTopic}</p>
        </div>
      </div>

      <div className="text-gray-400 p-4">
        <h1 className="gradient-font text-[20px] font-bold">Skills</h1>
        {role === "Explorer" && (
          <>
            <p className="text-[18px] text-[#181c27] font-bold">Nothing</p>
          </>
        )}
        {role === "Innovator" && (
          <>
            <p className="text-[18px] font-bold">Explorer +</p>
          </>
        )}

        {role === "Visionary" && (
          <>
            <p className="text-[18px] font-bold">Innovator +</p>
          </>
        )}
        <div>
          <p className="text-[16px]">{mainSkill}</p>
        </div>
      </div>

      <div className="p-4">
        <button className="border lg:w-[360px] h-[60px] bg py-2 px-5 button rounded-md flex gap-2 items-center justify-center text-[11px] font-bold">
          <img src={cert} alt="" className="h-[50px] w-[50px]" />

          <p className="text-[20px]">{certs}</p>
        </button>
      </div>

      <div className="px-4">
        <ul className="flex flex-col text-[11px] text-gray-400">
          <li className="flex gap-2 text-[16px]">
            <img src={check} alt="" />
            <span>Certification</span>
          </li>
          <li className="flex gap-2 text-[16px]">
            <img src={check} alt="" />
            <span>Person letter of recommendation</span>
          </li>
          <li className="flex gap-2 text-[16px]">
            <img src={check} alt="" />
            <span>Career & industry talks</span>
          </li>
          <li className="flex gap-2 text-[16px]">
            <img src={role === "Explorer" ? falsee : check} alt="" />
            <span>Lifetime alumni access</span>
          </li>
          <li className="flex gap-2 text-[16px]">
            <img src={role === "Explorer" ? falsee : check} alt="" />
            <span>Peer-to-peer mentorship</span>
          </li>
          <li className="flex gap-2 text-[16px]">
            <img
              src={role === "Explorer" || role === "Innovator" ? falsee : check}
              alt=""
            />
            <span>Industry executive mentorship</span>
          </li>
          <li className="flex gap-2 text-[16px]">
            <img
              src={role === "Explorer" || role === "Innovator" ? falsee : check}
              alt=""
            />
            <span>Work experience / internship</span>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <button className="border w-[100%] gradient-underline-inverse py-3 px-5 rounded-md flex gap-2 items-center justify-center text-[16px] font-bold">
          £<MultiDigitCounter target={money} duration={1000} />
        </button>
      </div>
    </div>
  );
};

export default FutureProgramCard;
