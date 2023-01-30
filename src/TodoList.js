import React from "react";

const TodoList = (props) => {
	return (
		<>
			<div className="todo">
				<i
					className="fa fa-times"
					// aria-hidden="true"
					onClick={() => {
						props.deleteTodo(props.id);
					}}
				/>
				<li>{props.text}</li>
			</div>
		</>
	);
};
export default TodoList;
