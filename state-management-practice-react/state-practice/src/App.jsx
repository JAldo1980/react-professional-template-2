import React, { useState } from "react";
import Toggle from "./Toggle";
import Numbers from "./Numbers";
import "./App.css";

function App() {
  const [state, setState] = React.useState(false);
  function toggleBtn() {
    setState(!state);
  }

  const [num, setNum] = React.useState(0);
  function add() {
    setNum(num + 1);
  }

  function minus() {
    if (num < 1) {
      return 0;
    } else setNum(num - 1);
  }

  return (
    <>
      <Toggle toggleBtn={toggleBtn} state={state} />
      <Numbers add={add} minus={minus} num={num} />
    </>
  );
}

export default App;
