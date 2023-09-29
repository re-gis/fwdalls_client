/* eslint-disable */
import React, { useEffect, useState } from "react";
import SingleDigitCounter from "./SingleDigitCounter";
import { useInView } from "react-intersection-observer";

const MultiDigitCounter = ({ target, duration = 2000 }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);
  const digits = String(target).split("").map(Number);

  return (
    <div className="flex items-center" ref={ref}>
      {digits.map((digit, index) => (
        <SingleDigitCounter
          key={`${index}-${key}`}
          end={digit}
          duration={duration}
        />
      ))}
    </div>
  );
};

export default MultiDigitCounter;
