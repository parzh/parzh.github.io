import React, { useState, useEffect } from "react";
import convert from "../api/convert";

/** @private */
interface OnConverted {
	(convertedExpression: string): unknown;
}

/** @private */
interface Props {
	expression: string | null;

	/** Defaults to `true` */
	ratesFetched?: boolean;
	onConverted?: OnConverted;
}

/** @private */
const noop: OnConverted = () => {};

export default function ConvertedContainer({ expression, ratesFetched = true, onConverted = noop }: Props): JSX.Element {
	const [ converted, setConverted ] = useState<string | null>(null);

	useEffect(() => {
		(async (): Promise<void> => {
			if (!expression || !ratesFetched)
				setConverted(null);

			else try {
				const value = await convert(expression);

				setConverted(value);
				onConverted(value);
			}

			catch (error) {
				setConverted(null);

				if (error instanceof SyntaxError === false)
					console.error(error);
			}
		})();
	}, [ expression, ratesFetched ]);

	return (
		<section className="ExpressionsContainer">
			<header>
				<h3>Expressions</h3>
			</header>

			<pre>{converted ?? "..."}</pre>
		</section>
	);
}
