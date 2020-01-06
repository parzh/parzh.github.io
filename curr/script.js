/// <reference lib="dom" />
/// <reference lib="es2017" />
/// <reference types="./types" />

window.Curr = window.Curr || {
	EXPRESSION: "(50 USD + 15 EUR) / 3 + 10 EUR - 500 UAH",
	URL_BASE: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=",
	MAX_FETCH_ATTEMPTS: 3,

	rates: Object.create(null),

	convert(code, amount) {
		return amount * (window.Curr.rates[code] || 1);
	},

	toUAH(code, amount, decimalDigits = 4) {
		return `${ window.Curr.convert(code, amount).toFixed(decimalDigits) } UAH`;
	},

	async fetchRate(code, attempts = 0) {
		const { rates, fetchRate, MAX_FETCH_ATTEMPTS } = window.Curr;

		if (code in rates === false) {
			let rate = 1;

			try {
				attempts++;

				const response = await fetch(window.Curr.URL_BASE + code);

				/** @type {RatesDataRaw} */
				const json = await response.json();

				rate = json[0].rate;
			}

			catch (error) {
				console.warn(`Could not fetch actual rate of the currency "${ code }"`);
				console.error(error);

				if (attempts < MAX_FETCH_ATTEMPTS) {
					console.log(`Fetching again after ${ attempts } failed attempts`);

					return fetchRate(code, attempts);
				}

				console.warn(`Reached fetch attempts limit (${ attempts } out of ${ MAX_FETCH_ATTEMPTS }); fallback to 1.00`);
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
		let exists = false;

		if (!!rateNode) {
			window.CurrDOM.clearNode(rateNode);
			exists = true;
		}

		else {
			rateNode = window.document.createElement("pre");

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
	setNodeText(resultNode, toUAH("", result, 2));
})();
