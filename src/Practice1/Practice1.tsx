import React, { useState } from "react";

export const Practice1 = () => {
  let [val, setval] = useState(1);
  const onClickPractice = (num) => {
    setval(num * 2);
    console.log(val);
  };
  const onClick = () => onClickPractice(val);
  return (
    <div>
      <p>練習問題</p>
      <button onClick={onClick}> 練習問題</button>
      <p>{val}</p>
    </div>
  );
};
