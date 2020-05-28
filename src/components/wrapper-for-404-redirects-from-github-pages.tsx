import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

/** @private */
interface Props {
	children: JSX.Element;
}

/** @private */
const isReady = (): boolean => document.readyState !== "loading";

export default function WrapperFor404RedirectsFromGitHubPages({ children }: Props): JSX.Element {
	const location = useLocation();
	const [ triedPath, setTriedPath ] = useState<string>();
	const [ ready, setReady ] = useState(isReady());

	useEffect(() => {
		const tried = new URLSearchParams(location.search).get("tried");

		if (tried != null)
			setTriedPath(tried);
	}, [ location ]);

	useEffect(() => {
		if (ready)
			return;

		const actuallyReady = isReady();

		if (ready !== actuallyReady)
			setReady(actuallyReady);
	}, [ ready, setReady ]);

	if (triedPath != null && triedPath !== window.location.pathname)
		return <Redirect to={triedPath} />;

	if (!ready)
		return <></>;

	return children;
}
