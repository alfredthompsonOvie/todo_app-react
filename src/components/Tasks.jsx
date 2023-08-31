/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

import {PiTrashSimple } from "react-icons/pi";

function Tasks({ todos, activeTab, onToggle, onDeleteTodo, onDeleteAll }) {
  const isEmpty = todos.length;

  let displayTodos;

  if (activeTab === "all") displayTodos = todos;
  
  if (activeTab === "active") displayTodos = todos.filter(todo => !todo.isComplete);
  
  if (activeTab === "completed") displayTodos = todos.filter(todo=> todo.isComplete);


	return (
		<section className="tasks__output">
			<ul className="task__list">
        {displayTodos.map(todo => <TaskItem
          todo={todo}
          onToggle={onToggle}
          onDeleteTodo={onDeleteTodo}
          key={todo.id}
        />)}
      </ul>
      
      {isEmpty > 1 && <button className="deleteAll" onClick={onDeleteAll}>
        <PiTrashSimple />
        <span>delete all</span>
      </button>}
		</section>
	);
}
// PiTrashSimpleBold
export default Tasks;
