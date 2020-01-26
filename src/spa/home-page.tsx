import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(): JSX.Element {
	return <>
		<div>Home page</div>

		<p>
			<Link to="/user">Go to /user</Link>
		</p>
	</>;
}
