import React from "react";
import { createStyleFor } from "src/helpers/styles";

/** @private */
const styleFor = createStyleFor({
	separator: {
		position: "relative",
		top: "-1px",
	},
});

export default function BreadcrumbSeparator(): JSX.Element {
	return <small className="mx-2 text-muted" style={styleFor.separator}>/</small>;
}
