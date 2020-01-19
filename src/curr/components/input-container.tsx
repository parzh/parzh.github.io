import React from "react";
import "./input-container.css";

/** @private */
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

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

/** @private */
function handleChange(event: ChangeEvent, onChange: OnChange): unknown {
	const { value } = event.currentTarget;
	const verified = expressionRegex.test(value);

	return onChange(verified ? value : null);
}

export default function InputContainer({ onChange = noop }: Props): JSX.Element {
	const eventHandler = (event: ChangeEvent): unknown => handleChange(event, onChange);

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
