import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increase} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
