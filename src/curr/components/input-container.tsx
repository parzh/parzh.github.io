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
const noop: OnChange = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

/** @private */
const initial = {
	rendered: false,
	value: "(50 USD + 15 EUR) / 3 + 10 EUR - 500 UAH",
};

export default function InputContainer({ onChange = noop }: Props): JSX.Element {
	if (!initial.rendered) {
		initial.rendered = true;
		onChange(initial.value);
	}

	return (
		<section className="InputContainer">
			<header>
				<h3>Input</h3>
			</header>

			{/* TODO: restrict evaluable code here */}
			<input
				type="text"
				defaultValue={initial.value}
				onChange={(event): unknown => onChange(event.currentTarget.value)}
			/>
		</section>
	);
}
