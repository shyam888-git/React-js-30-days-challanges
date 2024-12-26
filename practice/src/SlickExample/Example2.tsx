import qs from "qs";
const data = {
  title: "Geeks for geeks",
  details: {
    category: "Programming",
    tags: ["Javascript", "React js", "Node js"],
  },
  author: {
    name: "Sandeep jain",
    age: 30,
  },
};

const queryString = qs.stringify(data, {
  allowDots: true,
});
console.log(queryString);

const res = qs.parse(queryString);
console.log(res);
const QueryStringExample2 = () => {
  return <div></div>;
};

export default QueryStringExample2;
