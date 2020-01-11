import React, { useState } from "react";

import InputContainer from "./components/input-container";
import RatesContainer from "./components/rates-container";
import ConvertedContainer from "./components/converted-container";
import ResultContainer from "./components/result-container";

export default function App(): JSX.Element {
	const [ input, setInput ] = useState<string | null>(null);
	const [ ratesFetched, setRatesFetched ] = useState<boolean>(false);
	const [ converted, setConverted ] = useState<string | null>(null);

	return (
		<>
			<InputContainer onChange={setInput} />
			<RatesContainer input={input} onAllFetched={(): unknown => setRatesFetched(true)} />
			<ConvertedContainer expression={input} ratesFetched={ratesFetched} onConverted={setConverted} />
			<ResultContainer expression={converted} />
		</>
	);
}
