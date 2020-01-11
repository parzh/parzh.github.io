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

export default function InputContainer({ onChange = noop }: Props): JSX.Element {
	return (
		<section className="InputContainer">
			<header>
				<h3>Input</h3>
			</header>

			<input type="text" onChange={(event): unknown => onChange(event.currentTarget.value)} />
		</section>
	);
}
