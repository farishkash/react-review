import React from "react";

export const Button = (props) => {
  const buttonStyle = props.completed ? "success" : "danger";
  const buttonText = props.completed ? "completed" : "pending";
  return (
    <button type="button" className={`ms-5 btn btn-${buttonStyle}`}>
      {buttonText}
    </button>
  );
};
