import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";
import useTask from "./components/useTask";


function App() {
const option = useTask()
const {listaTareas, eliminarTarea, editarTarea, agregar, tareaNueva, setNuevaTarea, completarTarea} = option


  const handlerChange = evento => {
    setNuevaTarea(evento.target.value);
  };

    return (
      <div className="app">
        <Header/>
        <form className="f1">
          <input className="primerimput"
          type="text"
          maxLength="25"
          value={tareaNueva}
          onChange={handlerChange}
          placeholder="Ingrese Tarea"
          />
          <button className="primerboton" type="submit" onClick={agregar}>
            Agregar Tarea
          </button>
        </form>
        <TaskList
        
          pendientes={listaTareas}
          onEliminar={eliminarTarea}
          onEditar={editarTarea}
          onCompletar={completarTarea}
        />

      </div>
    );
  }

  export default App;