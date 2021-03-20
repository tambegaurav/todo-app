import React from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import { uuid } from "uuidv4";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const initialState = {
    task: "",
    description: "",
    status: false,
    id: uuid(),
  };
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState(initialState);
  const [showCompleted, setShowCompleted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleAdd = (e) => {
    if (todo.task.length > 0) {
      setTodos([...todos, todo]);
      setTodo(initialState);
    }
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const notCompletedTodos = todos
    .filter((el) => !el.status)
    .map((el) => (
      <Todo
        key={el.task}
        todo={el}
        toggle={handleToggle}
        deleteTodo={handleDelete}
      />
    ));

  const completedTodos = todos
    .filter((el) => el.status)
    .map((el) => (
      <Todo
        key={el.task}
        todo={el}
        toggle={handleToggle}
        deleteTodo={handleDelete}
      />
    ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <TodoInput
        handleAdd={handleAdd}
        handleChange={handleChange}
        todo={todo}
      />
      {notCompletedTodos.length > 0 && (
        <h2 className={styles.type}>Not Completed</h2>
      )}
      {notCompletedTodos.length > 0 && notCompletedTodos}

      {completedTodos.length > 0 && <h2 className={styles.type}>Completed</h2>}
      {completedTodos.length > 0 && (
        <button
          className={styles.btn}
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted ? "hide" : "show"}
        </button>
      )}
      {showCompleted && completedTodos}
    </div>
  );
};

export default TodoList;
