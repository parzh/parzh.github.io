import React from "react";

import Title from "src/components/title";
import { useUserName } from "src/store/selectors";
import { createStyleFor } from "src/helpers/styles";

/** @private */
const styleFor = createStyleFor({
	editText: {
		cursor: "pointer",
	},
	editIcon: {
		verticalAlign: "middle",
	},
});

/** @private */
interface Props {
	onRename?: () => void;
}

export default function ProfileTitleReadonly({ onRename }: Props): JSX.Element {
	const name = useUserName();

	return (
		<>
			<Title>Hello, {name}!</Title>

			<span className="text-muted text-center" onClick={onRename}>
				<button
					type="button"
					className="btn btn-link text-secondary ml-1 py-0"
				>
					<i
						className="material-icons small mr-1"
						style={styleFor.editIcon}
					>
						create
					</i>
					<small>Rename</small>
				</button>
			</span>
		</>
	);
}
