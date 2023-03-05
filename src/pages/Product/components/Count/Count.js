import React from "react";
import "./Count.scss";

const Count = (props) => {
  const { count, setCount } = props;

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            setCount(count - 1);
            if (count < 2) {
              setCount(1);
            }
          }}
        >
          -
        </button>

        <div className="countInputText">{count}</div>

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
