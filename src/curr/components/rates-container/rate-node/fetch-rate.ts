import rates from "../../../rates";
import getRate from "./get-rate";

/** @private */
const MAX_ATTEMPTS = 3;

async function _fetchRate(code: string, attempts: number): Promise<number> {
	if (code in rates === false) {
		let rate = 1;

		try {
			attempts++;
			rate = await getRate(code);
		}

		catch (error) {
			console.warn(`Could not fetch actual rate of the currency "${ code }"`);
			console.error(error);

			if (attempts < MAX_ATTEMPTS) {
				console.log(`Fetching again (${ attempts + 1 /* showing near future */ } / ${ MAX_ATTEMPTS })`);

				return await _fetchRate(code, attempts);
			}

			console.warn(`Reached fetch attempts limit; fallback to 1.00`);
		}

		rates[code] = rate;
	}

	return rates[code];
}

export default async function fetchRate(code: string): Promise<number> {
	return await _fetchRate(code, 0);
}
