import React, { useMemo } from "react";
const Results = ({marks,subject}:any) => {

    let totalResults=useMemo(()=>{
        console.log("subjects===>")
        return (marks*100)/100;
    },[])
  console.log("inside results");
  return (
    <div>
      <p>Marks is {totalResults}</p>
      <p>total Results {subject}</p>
    </div>
  );
};

export default React.memo(Results);
