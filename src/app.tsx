import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import WrapperFor404RedirectsFromGitHubPages from "./components/wrapper-for-404-redirects-from-github-pages";

import HomePage from "./pages/home-page";
import TodoPage from "./pages/todo-page";
import NotFoundPage from "./pages/not-found-page";

export default function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<WrapperFor404RedirectsFromGitHubPages>
						<HomePage />
					</WrapperFor404RedirectsFromGitHubPages>
				</Route>
				<Route exact path="/todo">
					<TodoPage />
				</Route>
				<Route path="*">
					<NotFoundPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
