// @ts-check
import toUAH from "./rates/to-uah";
import showRate from "./rates/dom/show-rate";
import setNodeText from "./rates/dom/set-node-text";
import "./style.css";

/** @private */
const EXPRESSION = "(50 USD + 15 EUR) / 3 + 10 EUR - 500 UAH";

/** @private */
const DOM = {
	expressionNode: document.getElementById("expression"),
	expressionConvertedNode: document.getElementById("expression-converted"),
	resultNode: document.getElementById("result"),
};

(async () => {
	const {
		expressionNode,
		expressionConvertedNode,
		resultNode,
	} = DOM;

	/** @private */
	const currencyCodes = [ "USD", "EUR" ];

	await Promise.all(currencyCodes.map(showRate));

	const expressionConverted = `(${ toUAH("USD", 50) } + ${ toUAH("EUR", 15) }) / 3 + ${ toUAH("EUR", 10) } - 500 UAH`;

	/** @type {number} */
	const result = eval(expressionConverted.replace(/ UAH/g, ""));

	setNodeText(expressionNode, EXPRESSION);
	setNodeText(expressionConvertedNode, expressionConverted);
	setNodeText(resultNode, toUAH("", result, 2));
})();
