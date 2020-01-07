import React, { useState } from "react";

import RatesContainer from "./components/rates-container";
import ExpressionsContainer from "./components/expressions-container";
import ResultContainer from "./components/result-container";

export default function App() {
	const [ allFetched, setAllFetched ] = useState<boolean>(false);
	const [ converted, setConverted ] = useState<string | null>(null);

	return (
		<>
			<RatesContainer codes={[ "USD", "EUR" ]} onAllFetched={() => setAllFetched(true)} />
			<ExpressionsContainer allFetched={allFetched} onConverted={setConverted} />
			<ResultContainer expression={converted} />
		</>
	);
}
