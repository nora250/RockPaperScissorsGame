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

  //✊、✌、✋を順番に表示する
  const showRockPaperScissors = () => {
    const arryRockPaperScissors = ["✊", "✌", "✋"];
    arryRockPaperScissors.map((todo) => {
      return console.log(todo);
    });
  };

  return (
    <React.Fragment>
      <h1>{openeddHand}</h1>
      <button onClick={showRockPaperScissors}>START</button>
    </React.Fragment>
  );
};
