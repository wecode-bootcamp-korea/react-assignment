import React from "react";
import "./Count.scss";

const Count = (props) => {
const {number, setNumber} = props;

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
    if (number<=1) {
      setNumber(1)
    }
  }
  const reset = () => {
    setNumber(1);
  }

  return (
    <div className="count">
      <div className="countInput" >
        <button onClick={onDecrease}>-</button>
        <div className="countInputText" >{number}</div>
        <button onClick={onIncrease}>+</button>
      </div>
      <button className="resetBtn" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Count;
