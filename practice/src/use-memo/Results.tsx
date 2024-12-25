import React, { useMemo } from "react";

type resultsProps = {
  marks: number;
  subject: string;
};

const Results = ({ marks, subject }: resultsProps) => {
  const precentage = useMemo(() => {
    console.log("inside memo");
    return (marks * 100) / 100;
  }, [marks]);
  console.log("The Results Components");

  return (
    <div>
      The results :{marks}
      <p> The marks :{precentage}</p>
    </div>
  );
};

export default React.memo(Results);
