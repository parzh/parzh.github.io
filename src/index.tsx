import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page";

/** @private */
const app = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Route path="*">
				{/* TODO: <NotFoundPage /> */}
			</Route>
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
