import React from "react";
import { Link } from "react-router-dom";

import type Breadcrumb from "src/typings/breadcrumb";
import type Breadcrumbs from "src/typings/breadcrumbs";

import BreadcrumbSeparator from "./breadcrumb-separator";

export function createList(breadcrumbs: Breadcrumbs, withoutSeparators?: "without-separators"): JSX.Element[] {
	const items: JSX.Element[] = [];
	const entries = Object.entries(breadcrumbs);

	if (entries.length) {
		const [ lastKey, lastBreadcrumb ] = entries.pop()!;

		for (const [ key, breadcrumb ] of entries) {
			items.push(<BreadcrumbItem key={key} {...breadcrumb} />);

			if (!withoutSeparators)
				items.push(<BreadcrumbSeparator key={key + " separator"} />);
		}

		// last item should represent current path
		// and therefore should never be clickable
		items.push(<BreadcrumbItem key={lastKey} text={lastBreadcrumb.text} />);
	}

	return items;
}

/** @private */
type Props = Breadcrumb;

export default function BreadcrumbItem({ link, text }: Props): JSX.Element {
	if (link != null)
		return <Link to={link}>{text}</Link>

	return <span>{text}</span>;
}
