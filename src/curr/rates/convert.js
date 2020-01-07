import rates from "./rates";

/**
 * @private
 * @param {string} code
 * @param {number} amount
 * @returns {number}
 */
export default function convert(code, amount) {
	return amount * (rates[code] || 1);
}
