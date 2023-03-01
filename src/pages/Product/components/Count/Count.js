import React from "react";
import "./Count.scss";

const Count = (props) => {
  const { num, setNum } = props;

  const countMinus = () => {
    num > 1 ? setNum(num - 1) : setNum(1);
  };

  const countPlus = () => {
    setNum(num + 1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={countMinus}>-</button>
        <div className="countInputText">{num}</div>
        <button onClick={countPlus}>+</button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setNum(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
