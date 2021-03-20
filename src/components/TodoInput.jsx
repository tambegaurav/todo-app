import React from "react";
import styles from "./TodoInput.module.css";

const TodoInput = ({ handleAdd, handleChange, todo }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        name="task"
        onChange={handleChange}
        type="text"
        placeholder="Enter task name"
        value={todo.task}
        className={styles.input}
      />
      <input
        name="description"
        onChange={handleChange}
        type="text"
        placeholder="Enter task details"
        value={todo.description}
        className={styles.input}
      />
      <button className={`${styles.input} ${styles.btn}`} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
