import React, { useDebugValue, useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  //state
  const [openeddHand, setOpeneddHand] = useState("Rock");

  const changeOpenedHand = () => {
    if (openeddHand === "Rock") {
      setOpeneddHand("Paper");
    } else if (openeddHand === "Paper") {
      setOpeneddHand("Scissors");
    } else {
      setOpeneddHand("Rock");
    }
  };

  return (
    <React.Fragment>
      <h1>{openeddHand}</h1>
      <button onClick={changeOpenedHand}>START</button>
    </React.Fragment>
  );
};
