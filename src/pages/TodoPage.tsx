import React from "react";

import TodoList from "src/components/todo-list";
import WrapperForPages from "src/components/wrapper-for-pages";

export default function TodoPage(): JSX.Element {
	return (
		<WrapperForPages>
			<TodoList />
		</WrapperForPages>
	);
}
