import React from "react";
import Die from "./Die";
import "./RollDice.css";

// setup the sides for six sided dice
const sides = ["one", "two", "three", "four", "five", "six"];
function RollDice() {
  return (
    <div className="RollDice">
      <div className="RollDiceContainer"></div>
    </div>
  );
}

export default RollDice;
