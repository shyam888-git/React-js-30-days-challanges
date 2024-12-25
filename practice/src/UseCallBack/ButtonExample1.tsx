import React from "react";

const ButtonExample1 = ({ increment }: any) => {
  console.log("inside button");
  return (
    <div>
      <button type="button" onClick={increment}>
        Click me
      </button>
    </div>
  );
};

export default React.memo(ButtonExample1);
