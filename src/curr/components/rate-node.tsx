import React, { useState, useEffect } from "react";
import getRate from "../api/get-rate";

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
const noop: OnFetched = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

export default function RateNode({ code, onFetched = noop }: Props): JSX.Element {
	const [ rate, setRate ] = useState<number | null>(null);

	useEffect(() => {
		(async (): Promise<void> => {
			const rate = await getRate(code);

			setRate(rate);
			onFetched(rate);
		})();
	}, [ code ]);

	return <pre className="RateNode">{code}: {rate ?? "..."}</pre>;
}
