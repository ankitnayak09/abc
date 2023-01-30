import "./App.css";
import "./index.css";
import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const addTodos = (e) => {
		e.preventDefault();
		if (todo === "") alert("Enter Your Todo First ");
		else {
			setTodos((oldItems) => {
				return [...oldItems, todo];
			});
			setTodo("");
		}
	};

	const deleteTodo = (id) => {
		setTodos((oldItems) => {
			return oldItems.filter((arrElement, index) => {
				return index !== id;
			});
		});
	};

	return (
		<>
			<div className="main-div">
				<div className="center-div">
					<br />
					<h1> ToDo List</h1>
					<br />
					<form>
						<input
							type="text"
							placeholder="Add your Todo item"
							onChange={(e) => setTodo(e.target.value)}
							value={todo}
						/>
						<button className="btn-add" onClick={addTodos}>
							+
						</button>
					</form>
					<ol>
						{todos.map((todo, index) => {
							return (
								<TodoList
									key={index}
									text={todo}
									id={index}
									deleteTodo={deleteTodo}
								/>
							);
						})}
					</ol>
				</div>
				<br />
			</div>
		</>
	);
};

export default App;
