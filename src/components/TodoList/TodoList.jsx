import React from "react";

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />

          <p>{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
