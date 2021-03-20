import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <div className="madeby">
        Made with &#10084; by{" "}
        <a className="link" target="blank" href="https://gauravtambe.com">
          Gaurav
        </a>
      </div>
    </div>
  );
}

export default App;
