import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, toggle, deleteTodo }) => {
  return (
    <div className={styles.todoContainer}>
      <div style={{ textDecoration: todo.status ? "line-through" : "none" }}>
        {todo.task}
      </div>
      <div style={{ textDecoration: todo.status ? "line-through" : "none" }}>
        {todo.description}
      </div>
      <button className={styles.btn} onClick={() => toggle(todo.id)}>
        {todo.status ? "Mark Not Done" : "Mark Done"}
      </button>
      <button className={styles.btn} onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
