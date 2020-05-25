import React from "react";
import { hot } from "react-hot-loader/root";

/** @private */
const styleFor: Record<string, React.CSSProperties> = {
	text: {
		fontSize: "4rem",
	},
	icon: {
		cursor: "help",
	},
};

function App(): JSX.Element {
	return (
		<div className="container-fluid h-100">
			<div className="container h-100 d-flex flex-column justify-content-center align-items-center">
				<span style={styleFor.text} className="lead">
					Hello world!
				</span>

				<span className="d-flex flex-row">
					<a href="/profile">Go to profile page</a>

					<i
						className="material-icons ml-1 text-muted"
						style={styleFor.icon}
						title="There's no profile page really, I'm just taking the opportunity to show 404 page"
					>
						help_outline
					</i>
				</span>
			</div>
		</div>
	);
}

export default hot(App);
