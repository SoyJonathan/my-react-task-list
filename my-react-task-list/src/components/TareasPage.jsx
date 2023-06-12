import React from "react";
import { useTask } from "./useTask";

export const TareasPage = () => {
  const [states] = useTask();
  const { arrayTask, taskPending } = states;
  console.log(arrayTask);
  return (
    <div>
      <h1>Mis Tareas</h1>
      <div>
        <p className="d-inline mr-3">Id</p>
        <p className="d-inline mr-3">Nombre</p>
        <p className="d-inline">Descripcion</p>
      </div>
      {arrayTask.map((task, key) => {
        return (
          <div key={key}>
            <p className="d-inline mr-3">{task.id}</p>
            <p className="d-inline mr-3">{task.task.name}</p>
            <p className="d-inline">{task.task.description}</p>
          </div>
        );
      })}
    </div>
  );
};

