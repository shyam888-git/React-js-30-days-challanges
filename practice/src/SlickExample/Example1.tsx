import React from 'react'
import qs from 'qs';
export const data={
  title:"Frontend Technology",
  category:"Programming",
  tags:["Javascript","Node.js","npm"],
}

const QSExample = () => {
  const queryString=qs.stringify(data);
  console.log(queryString,'queryStringFy====>')

  const res=qs.parse(queryString);
  console.log(res, 'c')

  return (
    <div>
      
    </div>
  )
}

export default QSExample
