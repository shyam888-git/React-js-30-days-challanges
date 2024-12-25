import { useEffect, useRef } from "react";

const Example3 = () => {
  //managing focus when components mounts
  const inputELementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputELementRef.current) {
      inputELementRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input placeholder="iam focused on mount" ref={inputELementRef} />
    </div>
  );
};

export default Example3;
