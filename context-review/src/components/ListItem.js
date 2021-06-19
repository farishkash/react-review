import React from "react";
import { Button } from "./Button";

export const ListItem = ({ todo }) => {
  return (
    <li class="list-group-item">
      {todo.text} <Button completed={todo.completed} />
    </li>
  );
};
