import TaskList from "./TaskList";
function Task() {
  return (
    <div>
      <div className="listas">
      <input type="text" placeholder="Add new your to do"
      />
        <button type="button" name="btn1">+</button>
        <label> <input type="checkbox" id="numero" value="color"/>Buy a new gaming laptop</label>
        <label> <input type="checkbox" id="numero" value="color"/>Complete a previous task</label>
        <label> <input type="checkbox" id="numero" value="color"/>Create a video for youtube</label>
        <label> <input type="checkbox" id="numero" value="color"/> Create a new portafolio site</label>
        <button className="btn">Clear All</button>
    </div>
    </div>
  );
}

function Tienda() {
  return (
    <div className="Tienda">
      {listStore.map((producto) => (
        <Item
          key={producto.id}
          nombre={producto.name}
        />
      ))}
    </div>
  );
}
export default Task;
