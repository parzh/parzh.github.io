import React, { useState } from "react";
import RateNode from "./rate-node";

/** @private */
interface Props {
	codes: [ string, ...string[] ];
	onAllFetched?: () => unknown;
}

export default function RatesContainer({ codes, onAllFetched = () => {} }: Props) {
	const [ fetchedCount, setFetchedCount ] = useState<number>(0);

	const addFetched = () => setFetchedCount((current) => current + 1);

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
