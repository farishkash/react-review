import React, { createContext, useContext } from "react";

const initialState = {
  todos: [
    { id: 1, text: "Take out trash", completed: false },
    { id: 2, text: "Wash Car", completed: true },
    { id: 3, text: "Dinner Reservations", completed: false },
    { id: 4, text: "Camera", completed: true },
  ],
};

export const TodoContext = createContext(initialState);

// Provider
export const TodoProvider = ({ children }) => {
  const { todos } = useContext(TodoContext);

  return (
    <TodoContext.Provider value={{ todos: todos }}>
      {children}
    </TodoContext.Provider>
  );
};
