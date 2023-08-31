import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

/* eslint-disable react/prop-types */
function AddDetails({ onTodo }) {
  
  const [todo, setTodo] = useState('');

  function handleTask(e) {
    e.preventDefault();

    const task = {
      id: uuidv4(),
      todo,
      isComplete: false,
    }

    onTodo(task);
    setTodo('');
  }

	return (
		<form className="form" onSubmit={handleTask}>
			
      <section className="form__group">
				<label htmlFor="task"></label>
				<input
					type="text"
					placeholder="add details"
					id="task"
          className="form__control"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
				/>
      </section>
      
			<button type="submit" className="cta">
				add
			</button>
		</form>
	);
}

export default AddDetails;
