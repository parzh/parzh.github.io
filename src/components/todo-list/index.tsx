import React from "react";

import TodoListStats from "./todo-list-stats";
import TodoListItem from "./todo-list-item";

export default function TodoList(): JSX.Element {
	return (
		<>
			<header>
				<h1>My Todo List</h1>
				<TodoListStats />
			</header>
			<section>
				<TodoListItem />
			</section>
		</>
	);
}
