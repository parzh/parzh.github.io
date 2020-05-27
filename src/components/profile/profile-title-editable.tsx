import React, { useState } from "react";

import TinyButton from "src/components/tiny-button";

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
	const [ name, setName ] = useState(useUserName());

	return (
		<form
			onSubmit={(event): void => {
				event.preventDefault();
				onSubmit(name);
			}}
		>
			<input
				name="username"
				type="text"
				defaultValue={name}
				style={styleFor.input}
				className="form-control form-control-lg lead text-center border-top-0 border-right-0 border-left-0"
				onInput={(event): void => setName(event.currentTarget.value)}
			/>
			<div className="form-text text-muted text-center">
				<TinyButton className="text-secondary ml-1" onClick={onCancel}>
					Cancel
				</TinyButton>

				<TinyButton
					type="submit"
					className="ml-1"
				>
					Submit
				</TinyButton>
			</div>
		</form>
	);
}
