import React from "react";
import { toUAH } from "../rates";

/** @private */
interface Props {
	expression: string | null;
}

export default function ResultContainer({ expression }: Props) {
	let result: string;

	if (expression === null)
		result = "...";

	else if (!expression)
		result = "Error!";

	else {
		const math = expression.replace(/ UAH/g, "");
		const amount = eval(math) as number;

		result = toUAH("", amount, 2);
	}

	return (
		<section className="ResultContainer">
			<header>
				<h3>Result</h3>
			</header>

			<strong>
				<pre>{result}</pre>
			</strong>
		</section>
	);
}
