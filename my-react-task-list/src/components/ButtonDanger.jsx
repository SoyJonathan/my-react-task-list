const ButtonDanger = ({onClickClear,taskPending}) => {
  return (
    <div className="buttonDanger">
        <p>Tu tienes {taskPending} tareas pendientes</p>
        <button type="button" className="btn btn-danger" onClick={onClickClear}>Borrar todo</button>
    </div>
  )
}

export default ButtonDanger