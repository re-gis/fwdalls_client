/* eslint-disable */
import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className="w-[20%] h-[100%]">
        <Link>
          <img src={logo} alt="" className="h-[80px] w-[80.59px]" />
        </Link>
      </div>

      <div className="flex flex-row w-[80%] justify-end">
        <nav className="w-[100%] flex items-center justify-end">
          <div
            className="sm:hidden px-5 text-[30px] cursor-pointer hover:text-[#A842FF]"
            id="burgerIcon"
          >
            ☰
          </div>
          <ul className="flex items-center gap-8">
            <div className="hidden sm:flex gap-2 md:gap-8 items-center">
              <li className="gradient-underline">
                <Link className="text-[14px]">Explore</Link>
              </li>
              <li className="gradient-underline">
                <Link className="text-[14px]">Our Method</Link>
              </li>
              <li className="gradient-underline">
                <Link className="text-[14px]">About</Link>
              </li>
              <li className="gradient-underline">
                <Link className="text-[14px]">Blog</Link>
              </li>
              <li className="gradient-underline">
                <Link className="text-[14px]">Contact</Link>
              </li>
              <li className="gradient-underline">
                <Link className="text-[14px]">Work With Us</Link>
              </li>
            </div>
            <li>
              <button className="border bg py-2 px-5 w-[78px] rounded-[20px] text-[14px] button gradient-border-btn">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
