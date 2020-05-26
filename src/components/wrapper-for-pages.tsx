import React from "react";

/** @private */
interface Props extends React.HTMLAttributes<"div"> {
	classNameWrapper?: string;
}

export default function WrapperForPages({
	children,
	className = "",
	classNameWrapper = "",
}: Props): JSX.Element {
	return (
		<div className={"container-fluid h-100 " + classNameWrapper}>
			<div className={"container h-100 d-flex flex-column " + className}>
				{children}
			</div>
		</div>
	);
}
