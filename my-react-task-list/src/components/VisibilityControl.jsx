export const VisibilityControl = ({setShowCompleted, limpiarTarea, isChecked}) => {
  
  const handleDelete = () => {
    if (window.confirm("Esta seguro de querer eliminarlo?")) {
      limpiarTarea()
    }
  }
  return (
    <div>
      <label htmlFor="completada">Ver tareas completada</label>
      <input id="completada" type="checkbox" onChange={(e) => setShowCompleted(e.target.checked)} checked={isChecked} />
        
      <button className="btn" onClick={handleDelete}>Limpiar</button>
    </div>
  )
} 
