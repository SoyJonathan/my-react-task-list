import { useEffect, useState } from "react";


const useTask = ()=> {

    const [listaTareas, setListaTareas] = useState(
        JSON.parse(localStorage.getItem("listaTareas")) || tareasPendientes
      );
      const [tareaNueva, setNuevaTarea] = useState("");
    
      useEffect(() => {
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
      });
// Crear tareas:
const agregar = evento => {
    evento.preventDefault();
    if (tareaNueva.trim() !== "") {
      const nuevaTareaConId = {
        id: listaTareas.length + 1,
        descripcion: tareaNueva ,
        completado: false,
      };
      setListaTareas([...listaTareas, nuevaTareaConId]);
      setNuevaTarea("");
    }
}
// Hecho
// Borrar tareas
const eliminarTarea = (id,) => {
    const nuevasTareas = listaTareas.filter(tarea => tarea.id !== id);
    setListaTareas(nuevasTareas);
    console.log("aqui se elimina")
    console.log(nuevasTareas)
    };

    // Actualizar tareas
    const editarTarea = (id, nuevaDescripcion) => {
      const nuevasTareas = listaTareas.map(tarea => {
        if (tarea.id ===id) {
          tarea.descripcion = nuevaDescripcion;
        }
        return tarea;
      });
      setListaTareas(nuevasTareas);

    }
    const completarTarea = (id) => {
      const nuevasTareas = listaTareas.map((tarea) => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
      setListaTareas(nuevasTareas);
      localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
    };
    return {listaTareas, eliminarTarea, editarTarea, agregar, tareaNueva, setNuevaTarea, completarTarea}
}
export default useTask