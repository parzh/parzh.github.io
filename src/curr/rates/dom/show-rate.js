import fetchRate from "../fetch-rate";
import createRateNode from "./create-rate-node";
import setNodeText from "./set-node-text";

/** @private */
const ratesContainer = document.getElementById("rates-container");

/**
 * @param {string} code
 * @returns {Promise<void>}
 */
export default async function showRate(code) {
	const rate = fetchRate(code);
	const { rateNode, exists } = createRateNode(code);

	setNodeText(rateNode, await rate);

	if (!exists)
		ratesContainer.append(rateNode);
}
