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

	const tooShort = !name;
	const tooLong = name.length >= 32;
	const isValid = !tooShort && !tooLong;

	return (
		<form
			onSubmit={(event): void => {
				event.preventDefault();
				if (isValid) onSubmit(name);
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
					className={"ml-1 " + (!isValid ? "text-danger" : "")}
					icon={!isValid ? "error" : null}
					iconPosition="right"
					title={tooLong ? (
						"This name is 32+ characters long, which is too long"
					) : tooShort ? (
						"Please, specify a name that is at least 1 character long"
					) : ""}
				>
					Submit
				</TinyButton>
			</div>
		</form>
	);
}
