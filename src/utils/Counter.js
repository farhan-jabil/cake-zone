import React from "react";
import CountUp from "react-countup";

const Counter = ({ number, isCounting }) => {
  return (
    <div>
      {isCounting && <CountUp duration={2} className="counter" end={number} />}
    </div>
  );
};

export default Counter;
