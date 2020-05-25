import React, { useState, useEffect } from "react";
import toUAH from "../../api/curr/to-uah";

/** @private */
interface Props {
	expression: string | null;
}

export default function ResultContainer({ expression }: Props): JSX.Element {
	const [ result, setResult ] = useState<string | null>(null);

	useEffect(() => {
		if (expression === null)
			setResult(null);

		else try {
			const math = expression.replace(/ UAH/g, "");
			const amount = eval(math) as number;

			setResult(toUAH("", amount, 2));
		}

		catch (error) {
			setResult(null);

			if (error instanceof SyntaxError === false)
				console.error(error);
		}
	}, [ expression ]);

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
