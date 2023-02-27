import { TaskRow } from "./TaskRow"
export const Task = ({ task, toggleTask, showCompeted = false }) => {

  const taskTableRows = (doneValue) => {
    return (
      task
        .filter(task => task.done === doneValue) 
        .map(task => (
             <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
            ))
    )
  }

  return (
<table>
      <thead>
        <tr>
          <th>Tareas</th>
       </tr>
      </thead>
      <tbody>
         {
           taskTableRows(showCompeted)
          }
      </tbody>
    </table>
  )
}



  

