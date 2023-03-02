import "./Count.scss";

const Count = (props) => {
  const {count, setCount} =props;
  const handleCount = (num) => {
    if (count === 1 && num === -1) return
    setCount(count + num);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={() => handleCount(-1)}>-</button>
        <div className="countInputText">{count}</div>
        <button onClick={() => handleCount(1)}>+</button>
      </div>
      <button className="resetBtn" onClick={() => setCount(1)}>
        reset
      </button>
    </div>
  );
};

export default Count;
