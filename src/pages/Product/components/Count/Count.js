import "./Count.scss";
import React from "react";

const Count = (props) => {
  
  return (
    <div className="count">
      <div className="countInput">
        <button onClick={props.minusCount}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={props.plusCount}>+</button>
      </div>
      <button className="resetBtn" onClick={props.resetCount}>
        reset
      </button>
    </div>
  );
};

export default Count;
