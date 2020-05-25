import React, { useState, useEffect } from "react";
import getRate from "api/curr/get-rate";

/** @private */
interface OnFetched {
	(rate: number): unknown;
}

/** @private */
interface Props {
	code: string;
	onFetched?: OnFetched;
}
/** @private */
const noop: OnFetched = () => {};

export default function RateNode({ code, onFetched = noop }: Props): JSX.Element {
	const [ rate, setRate ] = useState<number | null>(null);

	useEffect(() => {
		(async (): Promise<void> => {
			const rate = await getRate(code);

			setRate(rate);
			onFetched(rate);
		})();
	}, [ code, onFetched ]);

	return <pre className="RateNode">{code}: {rate ?? "..."}</pre>;
}
