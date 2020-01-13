import rates from "./rates";
import fetchRate from "./fetch-rate";

/** @private */
const MAX_ATTEMPTS = 3;

/** @private */
async function _getRate(code: string, attempts: number): Promise<number> {
	if (code in rates === false) {
		let fetched: number | null = null;

		while (fetched == null && attempts < MAX_ATTEMPTS)
			try {
				if (attempts > 0)
					console.log(`Fetching "${ code }" (${ attempts + 1 } / ${ MAX_ATTEMPTS })`);

				attempts++;
				fetched = await fetchRate(code);
			}

			catch (error) {
				console.warn(`Could not fetch actual rate of "${ code }": ${ error }`);
			}

		if (fetched == null)
			console.warn(`Reached fetch attempts limit; fallback "${ code }" to 1.00`);

		rates[code] = fetched ?? 1;
	}

	return rates[code];
}

export default async function getRate(code: string): Promise<number> {
	return await _getRate(code, 0);
}
