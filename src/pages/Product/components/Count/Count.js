import React from "react";
import "./Count.scss";

const Count = (props) => {
  const { number, setNumber } = props;

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            number > 1 && setNumber(number - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{number}</div>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setNumber(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
