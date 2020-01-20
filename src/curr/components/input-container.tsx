import React, { useEffect, useState } from "react";
import "./input-container.css";

/** @private */
interface OnChange {
	(input: string | null): unknown;
}

/** @private */
interface Props {
	onChange?: OnChange;
}

/** @private */
const noop: OnChange = () => {};

/** @private */
const INITIAL_VALUE = "(50 USD + 15 EUR) / 3 + 10 EUR - 500 UAH";

/** @private */
const expressionRegex = /^[\d,.A-Z ()*/+-]+$/;

export default function InputContainer({ onChange = noop }: Props): JSX.Element {
	const [ value, setValue ] = useState<string>(INITIAL_VALUE);

	useEffect(() => {
		onChange(expressionRegex.test(value) ? value : null);
	}, [ value, onChange ]);

	const extractValue: React.ChangeEventHandler<HTMLInputElement> = (event) => setValue(event.currentTarget.value);

	return (
		<section className="InputContainer">
			<header>
				<h3>Input</h3>
			</header>

			<input type="text" value={value} onChange={extractValue} />
		</section>
	);
}
