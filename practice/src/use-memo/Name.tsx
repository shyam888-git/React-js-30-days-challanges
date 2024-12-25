import React from "react";
type nameProps = {
  name: string;
};
const Name = ({ name }: nameProps) => {
  console.log("The Name components");
  return <div>The name props :{name}</div>;
};

export default React.memo(Name);
