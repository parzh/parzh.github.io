import React from "react";

import Title from "src/components/title";

import TodoListStats from "./todo-list-stats";
import TodoListItem from "./todo-list-item";

export default function TodoList(): JSX.Element {
	return (
		<>
			<header>
				<Title>My Todo List</Title>
				<TodoListStats />
			</header>
			<section>
				<TodoListItem />
			</section>
		</>
	);
}
