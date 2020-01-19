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

/** @private */
const expressionRegex = /^[\d,.A-Z ()*/+-]+$/;

export default function InputContainer({ onChange = noop }: Props): JSX.Element {
	const eventHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const { value } = event.currentTarget;

		onChange(expressionRegex.test(value) ? value : null);
	};

	return (
		<section className="InputContainer">
			<header>
				<h3>Input</h3>
			</header>

			<input
				type="text"
				defaultValue={INITIAL_VALUE}
				onChange={eventHandler}
				onBlur={eventHandler}
				onFocus={eventHandler}
				autoFocus
			/>
		</section>
	);
}
