import { useEffect, useRef } from "react";

const Example2 = () => {
  const inputElementRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputElementRef.current) {
      inputElementRef.current.focus();
    }
  }, []);
  return (
    <div>
      <input type="text" ref={inputElementRef} />
    </div>
  );
};

export default Example2;
