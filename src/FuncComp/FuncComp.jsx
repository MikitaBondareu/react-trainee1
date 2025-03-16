import React from "react";
let arrList = [];
for (let i = 0; i < 5; i++) {
  arrList.push("el" + (i + 1));
}

const FuncComp = (props) => {
  const randomKey = (number) => {
    let hash = "#id" + number;
    return hash;
  };

  return (
    arrList &&
    arrList.map((element, index) => {
      return <li key={randomKey(index)}>{element}</li>;
    })
  );
};

export default FuncComp;
