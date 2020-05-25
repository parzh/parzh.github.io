import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

/** @private */
interface Props {
	children: JSX.Element;
}

export default function WrapperFor404RedirectsFromGitHubPages({ children }: Props): JSX.Element {
	const location = useLocation();
	const [ triedPath, setTriedPath ] = useState<string>();
	const [ isReady, setIsReady ] = useState(false);

	useEffect(() => {
		const tried = new URLSearchParams(location.search).get("tried");

		if (tried != null)
			setTriedPath(tried);
	}, [ location ]);

	useEffect(() => {
		function readyStateChangeListener(): void {
			if (!isReady)
				setIsReady(document.readyState !== "loading");
		}

		document.addEventListener("readystatechange", readyStateChangeListener);

		return (): void => {
			document.removeEventListener("readystatechange", readyStateChangeListener);
		};
	}, [ isReady, setIsReady ]);

	if (triedPath != null)
		return <Redirect to={triedPath} />;

	if (!isReady)
		return <></>;

	return children;
}
