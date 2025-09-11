import React from "react";

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>
          <p>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
