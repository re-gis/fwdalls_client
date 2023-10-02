/* eslint-disable */
import React, { useEffect, useRef } from "react";

const CircularLoader = ({ percentage, text }) => {
   const circleRef = useRef(null);
   const circumference = 2 * Math.PI * 45;
   const strokeDashoffset = (circumference * percentage) / 100;

   useEffect(() => {
     if (circleRef.current) {
       // Animation from 0 to current percentage
       circleRef.current.style.transition = "none"; // Remove transition temporarily
       circleRef.current.style.strokeDashoffset = `${circumference}`;
       setTimeout(() => {
         circleRef.current.style.transition = "stroke-dashoffset 1s ease-out"; // Re-add transition
         circleRef.current.style.strokeDashoffset = `${-strokeDashoffset}`;
       }, 10); // Small delay to trigger the transition
     }
   }, [percentage]);

  return (
    <div className="w-[100%] lg:w-[25%] px-10 flex flex-col sm:flex-row lg:flex-col gap-5 lg:gap-0 items-center">
      <div className="relative w-32 h-32">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#242A3A" />
              <stop offset="100%" stopColor="#0f0d0d" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#progressGradient)"
            stroke="#A842FF"
            strokeWidth="2"
          />
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={-strokeDashoffset}
            transform="rotate(-90, 50, 50)" // Rotate the circle to start from the top
            style={{
              transition: "stroke-dashoffset 1s ease-out",
            }} // Rotate the circle to start from the top
          />
        </svg>
        <div className="absolute inset-0 flex items-center gradient-font justify-center font-bold text-[24px]">
          {percentage}
          <span className="text-[18px]">%</span>
        </div>
      </div>
      <div className="flex text-gray-400 items-center text-[18px] font-[500] justify-center text-center">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default CircularLoader;
