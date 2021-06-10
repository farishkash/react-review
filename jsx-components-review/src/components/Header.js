import React from "react";

const myText = "My Header in a variable";
const num1 = 15;
const num2 = 25;
function Header({ headingText }) {
  return (
    <div>
      <h1>{headingText}</h1>
      {/* <p>{num1 * num2}</p> */}
    </div>
  );
}

export default Header;
