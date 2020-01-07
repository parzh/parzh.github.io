// @ts-check
import rates from "./rates";

/** @private */
const URL_BASE = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=";

/** @private */
const MAX_ATTEMPTS = 3;

/**
 * @private
 * @param {string} code
 * @returns {Promise<number>}
 */
async function getRate(code) {
	const response = await fetch(URL_BASE + code);

	/** @type {import("./rates-data-raw").RatesDataRaw} */
	const [ data ] = await response.json();

	return data.rate;
}

/**
 * @private
 * @param {string} code
 * @param {number} attempts
 * @returns {Promise<number>}
 */
async function _fetchRate(code, attempts) {
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
				console.log(`Fetching again after ${ attempts } failed attempts`);

				return await _fetchRate(code, attempts);
			}

			console.warn(`Reached fetch attempts limit (${ attempts } out of ${ MAX_ATTEMPTS }); fallback to 1.00`);
		}

		rates[code] = rate;
	}

	return rates[code];
}

/**
 * @param {string} code
 * @returns {Promise<number>}
 */
export default async function fetchRate(code) {
	return await _fetchRate(code, 0);
}
