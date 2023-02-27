import { useState, useEffect } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList";
import { Task } from "./components/Task"
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  
  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState (false)
 
useEffect(() => {
    let data = localStorage.getItem("task")
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems))
  }, [taskItems]) 

  function crearTarea(taskName) {
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName, done:false} ])
    }
  }

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name == task.name) ? { ...t, done: !t.done } : t)   
    );
  }

  
  
  const limpiarTarea = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  
  
return (
  <div className="App">
    <TaskList crearTarea={crearTarea}/>
    <Task task={taskItems} toggleTask={toggleTask} />
    <VisibilityControl
      isChecked={showCompleted}
      setShowCompleted={(checked) => setShowCompleted(checked)} limpiarTarea={limpiarTarea} />
    {showCompleted === true && (
        <Task task={taskItems} toggleTask={toggleTask} showCompeted={showCompleted}
      />
    )}
   </div>
);  
}
export default App;

