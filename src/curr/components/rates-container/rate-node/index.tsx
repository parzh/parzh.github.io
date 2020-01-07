import React, { useState, useEffect } from "react";
import fetchRate from "./fetch-rate";

/** @private */
interface Props extends React.HTMLAttributes<HTMLPreElement> {
	code: string;
	onFetched?: (rate: number) => unknown;
}

export default function RateNode({ code, className, onFetched = () => {}, ...props }: Props) {
	const [ rate, setRate ] = useState<number | null>(null);

	useEffect(() => {
		(async () => {
			const rate = await fetchRate(code);

			setRate(rate);
			onFetched(rate);
		})();
	}, [ code ]);

	const value = rate === null ? "..." : rate;

	return (
		<pre {...props} className={`RateNode ${ className || "" }`}>
			{code}: {value}
		</pre>
	);
}
