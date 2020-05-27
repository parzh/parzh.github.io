import React from "react";
import { Link } from "react-router-dom";

import { createStyleFor } from "src/helpers/styles";

import Page from "./page";
import Title from "src/components/title";

/** @private */
const styleFor = createStyleFor({
	disclaimer: {
		fontSize: "3rem",
		animation: "fade-in-to-100 1s both",
	},
	emoji: {
		position: "absolute",
		right: "20%",
		top: "30%",
		transform: "translateY(-50%)",
		fontSize: "12rem",
		zIndex: -1,
		animation: "fade-in-to-7 2s 1.5s both",
	},
	homelink: {
		animation: "fade-in-to-100 1s 0.5s both",
	},
});

export default function NotFoundPage(): JSX.Element {
	return (
		<Page className="justify-content-center align-items-center">
			<Title style={styleFor.disclaimer}>
				Sorry, this page does not exist
			</Title>

			<span style={styleFor.emoji}>😮</span>

			<span style={styleFor.homelink}>
				<Link to="/">Go to home page instead</Link>
			</span>
		</Page>
	);
}
