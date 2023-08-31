/* eslint-disable react/prop-types */

import { PiTrashSimple } from "react-icons/pi";

function TaskItem({ todo, onToggle, onDeleteTodo }) {
  
  // function handleChange(){}


	return (
		<li className={`task__item ${todo.isComplete ? "complete" : ""}`}>
			<section className="form__group--checkbox">
				<label htmlFor="checkbox"></label>
				<input type="checkbox" id="checkbox" className="checkbox" value={todo?.isComplete} onChange={()=>onToggle(todo.id)}/>
			</section>
      <p className={``}>{todo?.todo}</p>
      <button className="delete" onClick={()=>onDeleteTodo(todo.id) }><PiTrashSimple/></button>
		</li>
	);
}

export default TaskItem;
