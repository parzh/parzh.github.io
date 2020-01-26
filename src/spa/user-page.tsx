import React from "react";
import { Link } from "react-router-dom";

export default function UserPage(): JSX.Element {
	return <>
		<div>User page</div>

		<p>
			<Link to="/home">Go to /home</Link>
		</p>
	</>;
}
