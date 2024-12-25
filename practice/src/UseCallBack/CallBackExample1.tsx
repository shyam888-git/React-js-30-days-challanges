import { useCallback, useState } from "react";
import ButtonExample1 from "./ButtonExample1";

const CallBackExample1 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <ButtonExample1 increment={increment} />
    </div>
  );
};

export default CallBackExample1;
