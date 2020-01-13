import React from "react";
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

export default function InputContainer({ onChange = noop }: Props): JSX.Element {
	return (
		<section className="InputContainer">
			<header>
				<h3>Input</h3>
			</header>

			{/* TODO: restrict evaluable code here */}
			<input
				type="text"
				defaultValue={INITIAL_VALUE}
				onChange={(event): unknown => onChange(event.currentTarget.value)}
				onFocus={(event): unknown => onChange(event.currentTarget.value)}
				autoFocus
			/>
		</section>
	);
}
