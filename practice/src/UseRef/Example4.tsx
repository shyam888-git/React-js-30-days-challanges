import { useEffect, useRef, useState } from "react";

const Example4 = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(0);
  useEffect(() => {
    inputRef.current = count;
  }, [count]);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count
      </button>
      <p>current count is {count}</p>
      <p>previous count is {inputRef.current}</p>
    </div>
  );
};

export default Example4;
