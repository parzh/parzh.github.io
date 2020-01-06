//@ts-check
import convert from "./convert";

/**
 * @private
 * @param {string} code
 * @param {number} amount
 * @param {number} [decimalDigits]
 * @returns {string}
 */
export default function toUAH(code, amount, decimalDigits) {
	const converted = convert(code, amount);

	/** @type {string} */
	let result;

	if (arguments.length === 3)
		result = converted.toFixed(decimalDigits);

	else
		result = converted.toString();

	return `${ result } UAH`;
}
