import React from "react";

function Toggle(props) {
  const { toggleBtn, state } = props;

  return (
    <>
      <div onClick={toggleBtn}>{state ? "🌙" : "☀️"}</div>
    </>
  );
}

export default Toggle;
