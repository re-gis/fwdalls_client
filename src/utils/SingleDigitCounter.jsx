/* eslint-disable */
import React, { useState, useEffect } from "react";

const SingleDigitCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < end) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, duration / (end + 1));

    return () => clearInterval(interval);
  }, [count, end, duration]);

  return (
    <div className="counter-container">
      <span
        className="number"
        style={{ transform: `translateY(-${count * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <p key={num} className="digit">
            {num}
          </p>
        ))}
      </span>
    </div>
  );
};

export default SingleDigitCounter;
