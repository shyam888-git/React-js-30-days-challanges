import React from "react";
const Name = ({ name }: any) => {
  console.log("inside name");

  return (
    <div>
      <p>Name is :{name}</p>
    </div>
  );
};

export default React.memo(Name);
