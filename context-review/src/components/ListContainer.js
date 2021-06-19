import React, { useContext } from "react";
import { ListItem } from "./ListItem";
import { TodoContext } from "../context/TodoContext";

export const ListContainer = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <ul class="list-group">
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
