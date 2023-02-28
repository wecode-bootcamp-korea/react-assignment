import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="count">
      <div className="countWrapper">
        <button onClick={() => setCount(count - 1)} className="btnMinus">
          -
        </button>
        <span className="txtValue">{count}</span>
        <button onClick={() => setCount(count + 1)} className="btnPlus">
          +
        </button>
      </div>
      <button onClick={() => setCount(1)} className="btnReset">
        Reset
      </button>
    </div>
  );
};

export default Count;
