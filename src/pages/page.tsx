import React, { useState, useEffect } from "react";

import type { Breadcrumbs } from "src/components/breadcrumbs/breadcrumb-item";
import { createList } from "src/components/breadcrumbs/breadcrumb-item";

/** @private */
interface Props extends React.HTMLAttributes<"div"> {
	breadcrumbs?: Breadcrumbs;
}

/** @private */
const empty: Breadcrumbs = Object.create(null);

export default function Page({
	children,
	className = "",
	breadcrumbs = empty,
}: Props): JSX.Element {
	const [ breadcrumbItems, setBreadcrumbItems ] = useState<JSX.Element[]>([]);

	useEffect(() => {
		setBreadcrumbItems(createList(breadcrumbs));
	}, [ breadcrumbs, setBreadcrumbItems ]);

	return (
		<>
			<section className="d-flex flex-column h-100">
				{breadcrumbItems.length === 0 ? null : (
					<nav className="navbar navbar-light bg-light flex-shrink-0 justify-content-start">
						{breadcrumbItems}
					</nav>
				)}

				<div className="container-fluid flex-grow-1 d-flex">
					<div className={"container flex-fill d-flex flex-column " + className}>
						{children}
					</div>
				</div>
			</section>
		</>
	);
}
