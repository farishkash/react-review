import React from "react";
import "./main.css";

export default function Main({ name, children }) {
  return (
    <div>
      <div>
        <h1 className={`${name}`}>{children}</h1>
      </div>
    </div>
  );
}
