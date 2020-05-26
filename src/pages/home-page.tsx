import React from "react";
import { Link } from "react-router-dom";

import WrapperForPages from "src/components/wrapper-for-pages";

/** @private */
const styleFor: Record<string, React.CSSProperties> = {
	greeting: {
		fontSize: "4rem",
	},
	icon: {
		cursor: "help",
	},
};

export default function HomePage(): JSX.Element {
	return (
		<WrapperForPages className="justify-content-center align-items-center">
			<span id="greeting" style={styleFor.greeting} className="lead">
				Hello world!
			</span>

			<span className="d-flex flex-row">
				<Link to="/profile">Go to profile page</Link>

				<i
					className="material-icons ml-1 text-muted"
					style={styleFor.icon}
					title="There's no profile page really, I'm just taking the opportunity to show 404 page"
				>
					help_outline
				</i>
			</span>
		</WrapperForPages>
	);
}
