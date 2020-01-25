import React from "react";

/** @private */
interface Props {
	prop?: unknown;
}

export default function HomePage({ prop }: Props): JSX.Element {
	false && console.log(prop);

	return (<div>Home page</div>);
}
