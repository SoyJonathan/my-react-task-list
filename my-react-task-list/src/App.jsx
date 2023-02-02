import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Task from "./components/Task";
function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <Task />
    </div>
  );
}

export default App;
