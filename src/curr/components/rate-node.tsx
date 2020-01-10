import React, { useState, useEffect } from "react";
import getRate from "../api/get-rate";

/** @private */
interface Props {
	code: string;
	onFetched?: (rate: number) => unknown;
}

export default function RateNode({ code, onFetched = () => {} }: Props): JSX.Element {
	const [ rate, setRate ] = useState<number | null>(null);

	useEffect(() => {
		(async (): Promise<void> => {
			const rate = await getRate(code);

			setRate(rate);
			onFetched(rate);
		})();
	}, [ code ]);

	const value = rate === null ? "..." : rate;

	return <pre className="RateNode">{code}: {value}</pre>;
}
