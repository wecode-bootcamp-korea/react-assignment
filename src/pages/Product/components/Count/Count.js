import React from "react";
import "./Count.scss";

const Count = (props) => {
  console.log("PROPS>>>", props);
  const { count, setCount } = props;
  // const [count, setCount] = useState(1);

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            if (count === 1) {
              setCount(1);
            } else {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <div className="countInputText">{count}</div>
        <button
          onClick={() => {
            // if (count <= 1) {
            setCount(count + 1);
            // } else {
            //   setCount(1);
            // }
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
