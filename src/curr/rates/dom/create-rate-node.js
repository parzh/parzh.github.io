/**
 * @param {string} code
 * @returns {import("./create-rate-node-result").CreateRateNodeResult}
 */
export default function createRateNode(code) {
	let rateNode = document.querySelector(`[data-code=${ code }]`);
	let exists = false;

	if (!!rateNode) {
		exists = true;
	}

	else {
		rateNode = document.createElement("pre");

		rateNode.classList.add("rate");
		rateNode.setAttribute("data-code", code);
	}

	return { rateNode, exists };
}
