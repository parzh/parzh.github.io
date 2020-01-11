import React, { useState } from "react";
import toUAH from "../api/to-uah";

/** @private */
interface Props {
	expression: string | null;
}

export default function ResultContainer({ expression }: Props): JSX.Element {
	const [ result, setResult ] = useState<string | null>(null);

	if (expression === null)
		setResult(null);

	else if (!expression)
		setResult("Error!");

	else {
		const math = expression.replace(/ UAH/g, "");
		const amount = eval(math) as number;

		setResult(toUAH("", amount, 2));
	}

	return (
		<section className="ResultContainer">
			<header>
				<h3>Result</h3>
			</header>

			<strong>
				<pre>{result ?? "..."}</pre>
			</strong>
		</section>
	);
}
