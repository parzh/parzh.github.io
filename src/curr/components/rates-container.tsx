import React, { useState } from "react";
import RateNode from "./rate-node";

/** @private */
interface OnAllFetched {
	(): unknown;
}

/** @private */
interface Props {
	codes: [ string, ...string[] ];
	onAllFetched?: OnAllFetched;
}

/** @private */
const noop: OnAllFetched = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

export default function RatesContainer({ codes, onAllFetched = noop }: Props): JSX.Element {
	const [ fetchedCount, setFetchedCount ] = useState<number>(0);

	const addFetched = (): unknown => setFetchedCount((current) => current + 1);

	if (fetchedCount >= codes.length)
		onAllFetched();

	return (
		<section className="RatesContainer">
			<header>
				<h3>Rates</h3>
			</header>

			{codes.map((code) => (
				<RateNode key={code} code={code} onFetched={addFetched} />
			))}
		</section>
	);
}
