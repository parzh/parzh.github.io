import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import UserPage from "./user-page";
import HomePage from "./home-page";

export default function App(): JSX.Element {
	return (
		<>
			<section className="links">
				<p>
					<Link to="/home">Go to /home</Link>
				</p>
				<p>
					<Link to="/user">Go to /user</Link>
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
