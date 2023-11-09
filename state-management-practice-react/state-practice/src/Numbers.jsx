import React from "react";

function Numbers(props) {
  const { add, minus, num } = props;

  return (
    <>
      <div>{num}</div>
      <div onClick={add}>+</div>
      <div onClick={minus}>-</div>
    </>
  );
}

export default Numbers;
