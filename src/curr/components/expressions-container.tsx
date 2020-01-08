import React from "react";
import toUAH from "../api/to-uah";

/** @private */
interface Props {
	allFetched: boolean;
	onConverted?: (convertedExpression: string) => unknown;
}

export default function ExpressionsContainer({ allFetched, onConverted = () => {} }: Props) {
	let converted: string;

	if (!allFetched)
		converted = "...";

	else {
		converted = `(${ toUAH("USD", 50) } + ${ toUAH("EUR", 15) }) / 3 + ${ toUAH("EUR", 10) } - 500 UAH`;
		onConverted(converted);
	}

	return (
		<section className="ExpressionsContainer">
			<header>
				<h3>Expressions</h3>
			</header>

			{/* TODO: try calculating expressions dynamically someday? */}
			<pre>(50 USD + 15 EUR) / 3 + 10 EUR - 500 UAH</pre>
			<pre>{converted}</pre>
		</section>
	);
}
