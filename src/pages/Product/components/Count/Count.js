import React from "react";
import "./Count.scss";

const Count = (props) => {
  const { counts, count, setCount } = props;
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{counts}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="resetBtn"
        onClick={() => {
          setCount(1);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Count;
