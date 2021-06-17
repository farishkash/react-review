import React, { useState } from "react";
import Die from "./Die";
import "./RollDice.css";

// setup the sides for six sided dice
const sides = ["one", "two", "three", "four", "five", "six"];
function RollDice() {
  const [diceState, setDiceState] = useState({
    die1: "one",
    die2: "one",
    rolling: false,
  });

  const handleRoll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    const newDiceState = { die1: newDie1, die2: newDie2, rolling: false };
    setDiceState({ ...diceState, rolling: true });
    setTimeout(() => {
      setDiceState(newDiceState);
    }, 1000);
  };

  return (
    <div className="RollDice">
      <div className="RollDiceContainer">
        <Die face={diceState.die1} rolling={diceState.rolling} />
        <Die face={diceState.die2} rolling={diceState.rolling} />
      </div>
      <button onClick={handleRoll} disabled={diceState.rolling}>
        {diceState.rolling ? "Rolling" : "Roll Dice!"}
      </button>
    </div>
  );
}

export default RollDice;
