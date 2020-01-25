import React from "react";

/** @private */
interface Props {
	prop?: unknown;
}

export default function UserPage({ prop }: Props): JSX.Element {
	false && console.log(prop);

	return (<div>User page</div>);
}
