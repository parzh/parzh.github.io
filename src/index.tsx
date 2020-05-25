import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import WrapperFor404RedirectsFromGitHubPages from "./components/wrapper-for-404-redirects-from-github-pages";

/** @private */
const app = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/">
				<WrapperFor404RedirectsFromGitHubPages>
					<HomePage />
				</WrapperFor404RedirectsFromGitHubPages>
			</Route>
			<Route path="*">
				{/* TODO: <NotFoundPage /> */}
			</Route>
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
