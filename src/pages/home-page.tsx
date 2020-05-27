import React from "react";
import { Link } from "react-router-dom";

import Page from "src/pages/page";

/** @private */
const styleFor: Record<string, React.CSSProperties> = {
	iconContainer: {
		verticalAlign: "middle",
	},
	icon: {
		cursor: "help",
		fontSize: "small",
	},
};

export default function HomePage(): JSX.Element {
	return (
		<Page className="justify-content-center align-items-stretch">
			<div className="text-center">
				<Link to="/profile">Go to profile page</Link>

				<span className="ml-1">or</span>

				<span className="ml-1">
					<Link to="/launch">launch a rocket 🚀 to Mars</Link>

					<span style={styleFor.iconContainer}>
						<i
							className="material-icons ml-1 text-muted"
							style={styleFor.icon}
							title="No rockets for now, I'm just taking the opportunity to show 404 page"
						>
							help_outline
						</i>
					</span>
				</span>
			</div>
		</Page>
	);
}
