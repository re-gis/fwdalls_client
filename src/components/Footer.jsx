/* eslint-disable */
import React from "react";
import sendImg from "../assets/images/send.svg";
import tiktok from "../assets/images/tiktok.svg";
import facebook from "../assets/images/facebook.svg";
import envelope from "../assets/images/envelope.svg";
import calendar from "../assets/images/calendar.svg";
import check from "../assets/images/check.svg";
import chat from "../assets/images/chat.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import phone from "../assets/images/phone.svg";
import snapchat from "../assets/images/snapchat.svg";

const Footer = () => {
  return (
    <div className="text-[#919EAB] py-[5%] font-[400] text-[16px]">
      <div className="flex flex-col md:flex-row justify-between px-20 pb-20 pt-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-[20px] font-[600]">Explore</h1>
          <div className="text-[16px] font-[400]">
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Program
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Our methods
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Your child will learn{" "}
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Success stories
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Student career coaches & mentor{" "}
              </li>
              <li className="cursor-pointer">FAQ’s </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-[20px] font-[600]">About Us</h1>
          <div className="text-[16px] font-[400]">
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                About{" "}
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Work with us
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Blog
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Responsible business principles
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Privacy & Policy{" "}
              </li>
              <li className="cursor-pointer hover:text-[#A842FF] hover:underline">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-white text-[20px] font-[600]">Follow Us</h1>
              </div>
              <div className="text-[16px] font-[400]">
                <ul className="flex flex-col gap-1">
                  <li className="flex items-center gap-2 cursor-pointer hover:no-underline underline hover:text-[#A842FF]">
                    <img src={facebook} alt="" />
                    <span>Facebook</span>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:no-underline underline hover:text-[#A842FF]">
                    <img src={instagram} alt="" />
                    <span>Instagram</span>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:no-underline underline hover:text-[#A842FF]">
                    <img src={linkedin} alt="" />
                    <span>Linkedin</span>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:no-underline underline hover:text-[#A842FF]">
                    <img src={snapchat} alt="" />
                    <span>Snapchat</span>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:no-underline underline hover:text-[#A842FF]">
                    <img src={tiktok} alt="" />
                    <span>Tiktok</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-[20px] font-[600]">Contact Us</h1>
              <div className="text-[16px] font-[400]">
                <ul className="flex flex-col gap-1">
                  <li className="cursor-pointer flex items-center gap-2 hover:no-underline underline hover:text-[#A842FF]">
                    <img src={chat} alt="" />
                    <span>Chat with us</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2 hover:no-underline underline hover:text-[#A842FF]">
                    <img src={calendar} alt="" />
                    <span>Schedule a call</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2 hover:no-underline underline hover:text-[#A842FF]">
                    <img src={check} alt="" />
                    <span>Book a free class</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2  hover:underline hover:text-[#A842FF]">
                    <img src={envelope} alt="" />
                    <span>hello@futureschool.io</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2  hover:underline hover:text-[#A842FF]">
                    <img src={phone} alt="" />
                    <span>+44 207 1833 837</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-white text-[20px] font-[600]">Newsletter</h1>
            <div>
              <p>
                Received regular update and exclusive contents to help your
                child stay ahead
              </p>
              <div className="sm:relative md:w-[500px] flex flex-col gap-5">
                <input
                  type="text"
                  className="sm:absolute w-[100%] h-[31px] top-[0.5px] text-white px-5 bg rounded-[100px]"
                />
                <img
                  src={sendImg}
                  alt=""
                  className="w-[50px] sm:absolute  md:left-[450px] top-[0.5px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-5">
        <h1 className="flex items-center justify-center text-[20px]">
          All content & material are ©2023 Futurescool
        </h1>
      </div>
    </div>
  );
};

export default Footer;
