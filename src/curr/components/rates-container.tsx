import React, { useState } from "react";
import RateNode from "./rate-node";

/** @private */
interface OnAllFetched {
	(): unknown;
}

/** @private */
interface Props {
	input: string | null;
	onAllFetched?: OnAllFetched;
}

/** @private */
const noop: OnAllFetched = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

/** @private */
const KEY_RANDOM = Math.random();

export default function RatesContainer({ input, onAllFetched = noop }: Props): JSX.Element {
	const currsMatch = input?.match(/(?<=\d )[A-Z]{3}/g);
	const currsFound = !!currsMatch;
	const currs = Array.from(currsMatch || []);

	const [ currsFetched, setCurrsFetched ] = useState<number>(0);

	const addFetched = (): unknown => setCurrsFetched((current) => current + 1);

	if (currsFound && currsFetched >= currs.length)
		onAllFetched();

	return (
		<section className="RatesContainer">
			<header>
				<h3>Rates</h3>
			</header>

			{((): JSX.Element[] => {
				if (!currsFound)
					return [<pre key={KEY_RANDOM}>...</pre>];

				if (!currs.length)
					return [<pre key={KEY_RANDOM}>No currencies provided</pre>];

				return currs.map((code) => (
					<RateNode key={code} code={code} onFetched={addFetched} />
				));
			})()}
		</section>
	);
}
