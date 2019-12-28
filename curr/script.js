// @ts-check
/// <reference lib="dom" />
/// <reference lib="es2017" />
/// <reference path="./types.d.ts" />

window.Curr = window.Curr || {
	EXPRESSION: "(50 USD + 15 EUR) / 3 + 10 EUR - 500 UAH",
	URL_BASE: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=",

	rates: Object.create(null),

	convert(code, amount) {
		return amount * (window.Curr.rates[code] || 1);
	},

	toUAH(code, amount) {
		return `${ window.Curr.convert(code, amount).toFixed(2) } UAH`;
	},

	async fetchRate(code) {
		const { rates } = window.Curr;

		if (code in rates === false) {
			let rate = 1;

			try {
				const response = await fetch(window.Curr.URL_BASE + code);

				/** @type {RatesDataRaw} */
				const json = await response.json();

				rate = json[0].rate;
			}

			catch (error) {
				console.warn(`Could not fetch actual rate of the currency "${ code }"; fallback to 1.00`);
			}

			rates[code] = rate;
		}

		return rates[code];
	},
};

window.CurrDOM = window.CurrDOM || {
	ratesContainer: window.document.getElementById("rates-container"),
	expressionsContainer: window.document.getElementById("expressions-container"),
	expressionNode: window.document.getElementById("expression"),
	expressionConvertedNode: window.document.getElementById("expression-converted"),
	resultContainer: window.document.getElementById("result-container"),
	resultNode: window.document.getElementById("result"),

	clearNode(node) {
		while (node.firstChild)
			node.removeChild(node.firstChild);
	},

	setNodeText(node, text) {
		window.CurrDOM.clearNode(node);
		node.insertAdjacentText("afterbegin", text);
	},

	createRateNode(code) {
		let rateNode = window.document.querySelector(`[data-code=${ code }]`);
		const exists = !!rateNode;

		if (exists)
			window.CurrDOM.clearNode(rateNode);

		else {
			rateNode = window.document.createElement("p");
	
			rateNode.classList.add("rate");
			rateNode.setAttribute("data-code", code);
		}

		return { rateNode, exists };
	},

	async showRate(code) {
		const rate = window.Curr.fetchRate(code);
		const { rateNode, exists } = window.CurrDOM.createRateNode(code);

		rateNode.insertAdjacentText("afterbegin", String(await rate));

		if (!exists)
			window.CurrDOM.ratesContainer.append(rateNode);
	},
};

(async () => {
	const {
		Curr: {
			EXPRESSION,
			toUAH,
		},
		CurrDOM: {
			expressionNode,
			expressionConvertedNode,
			resultNode,
			setNodeText,
			showRate,
		},
	} = window;

	/** @private */
	const currencyCodes = [ "USD", "EUR" ];

	await Promise.all(currencyCodes.map(showRate));

	const expressionConverted = `(${ toUAH("USD", 50) } + ${ toUAH("EUR", 15) }) / 3 + ${ toUAH("EUR", 10) } - 500 UAH`;
	const result = eval(expressionConverted.replace(/ UAH/g, ""));

	setNodeText(expressionNode, EXPRESSION);
	setNodeText(expressionConvertedNode, expressionConverted);
	setNodeText(resultNode, toUAH("", result));
})();
