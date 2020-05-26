import React from "react";

import BreadcrumbSeparator from "./breadcrumb-separator";
import { Link } from "react-router-dom";

export interface Breadcrumb {
	link?: string;
	text: string;
}

export type Breadcrumbs = Record<string, Breadcrumb>;

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
