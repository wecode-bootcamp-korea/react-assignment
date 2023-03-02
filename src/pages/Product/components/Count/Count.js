import React from "react";
import "./Count.scss";
// import { useState } from "react";

const Count = (props) => {
  const { count, setCount } = props;
  const minusCount = () => {
    count > 1 && setCount((prev) => prev - 1);
  };

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setCount(1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={minusCount}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={plusCount}>+</button>
      </div>
      <button className="resetBtn" onClick={resetCount}>
        reset
      </button>
    </div>
  );
};

export default Count;
