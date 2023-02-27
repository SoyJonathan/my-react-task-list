import { useState } from "react";

export const TaskList = ({crearTarea}) => {
  const [nuevaTarea, setNuevaTarea] = useState("")
  
const handleSubmit = (e) => {
  e.preventDefault();
  crearTarea(nuevaTarea)
  setNuevaTarea("")
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nueva tarea" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)
        } />
      <button>Guardar</button>
      </form>
  )
}