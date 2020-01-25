import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";

import UserPage from "./user-page";
import HomePage from "./home-page";

export default function App(): JSX.Element {
	const { goBack, goForward } = useHistory();

	return (
		<>
			<section className="links">
				<p>
					<Link to="/home">Go to /home</Link>
				</p>
				<p>
					<Link to="/user">Go to /user</Link>
				</p>
				<p>
					<a href="#" onClick={goBack}>Go back</a>
				</p>
				<p>
					<a href="#" onClick={goForward}>Go forward</a>
				</p>
			</section>

			<Switch>
				<Route path="/home">
					<HomePage />
				</Route>
				<Route path="/user">
					<UserPage />
				</Route>
			</Switch>
		</>
	);
}
