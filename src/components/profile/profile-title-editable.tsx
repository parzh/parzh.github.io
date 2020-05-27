import React, { useState } from "react";

import { styleFor as titleStyleFor } from "src/components/title";
import { useUserName } from "src/store/selectors";
import { createStyleFor } from "src/helpers/styles";

/** @private */
const styleFor = createStyleFor({
	input: {
		...titleStyleFor.title,
		fontWeight: 300,
	},
});

/** @private */
interface Props {
	onSubmit(name: string): void;
	onCancel?(): void;
}

export default function ProfileTitleEditable({
	onSubmit,
	onCancel,
}: Props): JSX.Element {
	const [name, setName] = useState(useUserName());

	return (
		<form onSubmit={(): void => onSubmit(name)}>
			<input
				name="username"
				type="text"
				defaultValue={name}
				style={styleFor.input}
				className="form-control form-control-lg lead text-center border-top-0 border-right-0 border-left-0"
				onInput={(event): void => setName(event.currentTarget.value)}
			/>
			<div className="form-text text-muted text-center">
				<button
					type="button"
					className="btn btn-link text-secondary ml-1"
					onClick={onCancel}
				>
					<small>Cancel</small>
				</button>

				<button
					type="submit"
					className="btn btn-link text-primary ml-1"
				>
					<small>Submit</small>
				</button>
			</div>
		</form>
	);
}
