import { useState } from "react";
import AddDetails from "./AddDetails";
import Header from "./Header";
import Tabs from "./Tabs";
import Tasks from "./Tasks";

function Todo() {
  const [activeTab, setActiveTab] = useState("all");
  const [todos, setTodos] = useState([]);

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  function handleTodos(todo) {
    setTodos(todos => [...todos, todo]);
  }
  function handleToggle(id) {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo));
  }
  function deleteTodo(id) {
    setTodos(todos=> todos.filter(todo => todo.id !== id ))
  }
  function deleleAll() {
    setTodos([]);
  }

	return (
		<main className="container">
			<Header />

      <Tabs onActiveTab={handleActiveTab} activeTab={activeTab} />
			
      <AddDetails onTodo={handleTodos} todos={todos} />

      <Tasks activeTab={activeTab} todos={todos} onToggle={handleToggle} onDeleteTodo={deleteTodo} onDeleteAll={deleleAll} />

		</main>
	);
}

export default Todo;
