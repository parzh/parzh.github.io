import React from "react";

import Page from "src/pages/page";
import TodoList from "src/components/todo-list";

export default function TodoPage(): JSX.Element {
	return (
		<Page breadcrumbs={{
			"home": {
				text: "Home",
				link: "/",
			},
			"todo": {
				text: "Todo list",
			},
		}}>
			<TodoList />
		</Page>
	);
}
