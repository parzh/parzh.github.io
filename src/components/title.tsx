import React from "react";

import { createStyleFor } from "src/helpers/styles";

/** @private */
const styleFor = createStyleFor({
	title: {
		fontSize: "4rem",
	},
});

/** @private */
type Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function Title({
	children,
	style = {},
	className = "",
	...props
}: Props): JSX.Element {
	return (
		<h1
			{...props}
			style={{ ...styleFor.title, ...style }}
			className={"lead text-center " + className}
		>
			{children}
		</h1>
	);
}
