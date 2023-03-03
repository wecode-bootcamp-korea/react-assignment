import React from 'react';
import './Count.scss';

const Count = (props) => {
  const { stock, state, setState } = props;

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => setState(state - 1)}>-</button>
        <div className="countInputText">{state}</div>
        <button onClick={() => setState(state + 1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setState(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
