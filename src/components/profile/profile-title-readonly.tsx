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
			<Title>{name}</Title>

			<span className="text-muted text-center" onClick={onRename}>
				<i
					className="material-icons small mr-1"
					style={styleFor.editIcon}
				>
					create
				</i>
				<u className="small" style={styleFor.editText}>
					rename
				</u>
			</span>
		</>
	);
}
