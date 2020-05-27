import React from "react";
import type { IconName } from "typed-md-icons";
import { createStyleFor } from "src/helpers/styles";

/** @private */
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	icon?: IconName;
}

/** @private */
const styleFor = createStyleFor({
	icon: {
		verticalAlign: "middle",
	},
});

export default function TinyButton({ icon, className = "", children, ...props }: Props): JSX.Element {
	return (
		<button
			type="button"
			{...props}
			className={"btn btn-link text-secondary py-0 " + className}
		>
			{icon != null && (
				<i
					className="material-icons small mr-1"
					style={styleFor.icon}
				>
					{icon}
				</i>
			)}

			<small>{children}</small>
		</button>
	);
}
