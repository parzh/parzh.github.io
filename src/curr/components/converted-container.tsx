import React from "react";
import toUAH from "../api/to-uah";

/** @private */
interface OnConverted {
	(convertedExpression: string): unknown;
}

/** @private */
interface Props {
	/** Defaults to `true` */
	ratesFetched?: boolean;
	onConverted?: OnConverted;
}

/** @private */
const noop: OnConverted = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

export default function ConvertedContainer({ ratesFetched = true, onConverted = noop }: Props): JSX.Element {
	let converted: string;

	if (!ratesFetched)
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
