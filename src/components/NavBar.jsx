/* eslint-disable */
import React from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <div className="w-[20%] h-[100%]">
        <Link>
          <img src={logo} alt="" className="h-[100%] w-[30%]" />
        </Link>
      </div>

      <div className="flex flex-row w-[80%] justify-end">
        <nav className="w-[100%] flex justify-end">
          <ul className="flex gap-10 items-center">
            <li className="gradient-underline">
              <Link>Explore</Link>
            </li>
            <li className="gradient-underline">
              <Link>Our Method</Link>
            </li>
            <li className="gradient-underline">
              <Link>About</Link>
            </li>
            <li className="gradient-underline">
              <Link>Blog</Link>
            </li>
            <li className="gradient-underline">
              <Link>Contact</Link>
            </li>
            <li className="gradient-underline">
              <Link>Work With Us</Link>
            </li>
            <li>
              <button className="border border-none bg py-2 px-5 rounded-[20px] button gradient-border-btn">
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
