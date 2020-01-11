import getRate from "./get-rate";
import toUAH from "./to-uah";

/** @private */
interface Token {
	input: string;
	amount: number;
	currency: string;
}

/** @private */
const moneyExpression = /(?<input>(?<amountRaw>\d+(?:[.,]\d+)?)\s+(?<currency>[A-Z]{3}))/g;

/** @private */
const outputs = new Map<string, string>();

export default async function convert(expression: string): Promise<string> {
	const matches = expression.matchAll(moneyExpression);
	const tokens: Token[] = [];
	const rates: Promise<number>[] = [];

	for (const match of matches) {
		const { input, amountRaw, currency } = match.groups!;
		const amount = parseFloat(amountRaw.replace(/,/g, "."));

		rates.push(getRate(currency));
		tokens.push({ input, amount, currency });
	}

	if (!tokens.length)
		throw new Error(`Couldn't find any money expression in the input: "${ expression }"`);

	await Promise.all(rates);

	let converted = expression;

	for (const { input, amount, currency } of tokens) {
		const output = outputs.get(input) ?? toUAH(currency, amount);

		converted = converted.replace(input, output);
		outputs.set(input, output);
	}

	return converted;
}
