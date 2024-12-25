import { useRef } from "react";

const Example1 = () => {
  let ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref.current, "times");
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Example1;
