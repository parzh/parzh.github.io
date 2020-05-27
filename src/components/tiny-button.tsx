import React from "react";
import type { IconName } from "typed-md-icons";
import { createStyleFor } from "src/helpers/styles";

/** @private */
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: IconName | null;
	iconPosition?: "left" | "right";
}

/** @private */
const styleFor = createStyleFor({
	icon: {
		verticalAlign: "middle",
	},
});

export default function TinyButton({
	icon,
	iconPosition = "left",
	className = "",
	children,
	...props
}: Props): JSX.Element {
	const nodes = [
		icon == null ? null : (
			<i
				className={
					"material-icons small " +
					(iconPosition === "left" ? "mr-1" : "ml-1")
				}
				style={styleFor.icon}
			>
				{icon}
			</i>
		),
		// eslint-disable-next-line react/jsx-key
		<small>{children}</small>,
	];

	if (iconPosition === "right") nodes.reverse();

	const [ first, second ] = nodes;

	return (
		<button
			type="button"
			{...props}
			className={"btn btn-link " + className}
		>
			{first}
			{second}
		</button>
	);
}
