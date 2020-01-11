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
const noop: OnAllFetched = () => {};

/** @private */
const KEY_RANDOM = Math.random();

export default function RatesContainer({ input, onAllFetched = noop }: Props): JSX.Element {
	const currsMatch = input?.match(/(?<=\d )[A-Z]{3}/g);
	const currs = Array.from(new Set(currsMatch || []));

	{
		const index = currs.indexOf("UAH");

		if (index !== -1)
			currs.splice(index, 1);
	}

	const [ currsFetched, setCurrsFetched ] = useState<number>(0);

	const addFetched = (): unknown => setCurrsFetched((current) => current + 1);

	if (!!currsMatch && currsFetched >= currs.length)
		onAllFetched();

	return (
		<section className="RatesContainer">
			<header>
				<h3>Rates</h3>
			</header>

			{((): JSX.Element[] => {
				if (!currsMatch)
					return [<pre key={KEY_RANDOM}>...</pre>];

				return currs.map((code) => (
					<RateNode key={code} code={code} onFetched={addFetched} />
				));
			})()}
		</section>
	);
}
