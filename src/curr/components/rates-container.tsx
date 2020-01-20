import React, { useState, useEffect } from "react";
import RateNode from "./rate-node";

/** @private */
type Input = string | null;

/** @private */
interface OnAllFetched {
	(): unknown;
}

/** @private */
type Fetched = Record<string, boolean>;

/** @private */
interface Props {
	input: Input;
	onAllFetched?: OnAllFetched;
}

/** @private */
const noop: OnAllFetched = () => {};

/** @private */
const ellipsis = <pre key={Math.random()}>...</pre>;

/** @private */
const currsRegex = /(?<=\d )[A-Z]{3}/g;

/** @private */
function getCurrs(input: Input): string[] {
	const set = new Set(input?.match(currsRegex) ?? []);

	set.delete("UAH");

	return Array.from(set);
}

export default function RatesContainer({ input, onAllFetched = noop }: Props): JSX.Element {
	const [ fetched, setFetched ] = useState<Fetched>(() => Object.create(null));

	const currs = getCurrs(input);

	useEffect(() => {
		if (currs.every((curr) => fetched[curr]))
			onAllFetched();
	}, [ input, currs, fetched, onAllFetched ]);

	return (
		<section className="RatesContainer">
			<header>
				<h3>Rates</h3>
			</header>

			{((): JSX.Element[] => {
				if (!currs.length)
					return [ellipsis];

				return currs.map((code) => (
					<RateNode key={code} code={code} onFetched={(): void => {
						setFetched({ ...fetched, [code]: true });
					}} />
				));
			})()}
		</section>
	);
}
