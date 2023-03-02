import React from 'react';
import './Count.scss';

// const Count = {counter, setCount} => {}

const Count = props => {
  const { counter, setCount } = props;

  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            setCount(counter - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{counter}</div>
        <button
          onClick={() => {
            setCount(counter + 1);
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
