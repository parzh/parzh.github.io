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
	/** Fires once the new name is submitted */
	onEdit(name: string): void;
}

export default function ProfileTitleEditable({ onEdit }: Props): JSX.Element {
	const [name, setName] = useState(useUserName());

	return (
		<form onSubmit={(): void => onEdit(name)}>
			<input
				name="username"
				type="text"
				defaultValue={name}
				style={styleFor.input}
				className="form-control form-control-lg lead text-center border-top-0 border-right-0 border-left-0"
				onInput={(event): void => setName(event.currentTarget.value)}
			/>
			<div className="form-text text-muted row">
				<div className="col">
					The new name is saved automatically. Press{" "}
					<span className="text-monospace">Enter</span> to return to
					normal mode.
				</div>
			</div>
		</form>
	);
}
