import rates from "./rates";

export default function toUAH(code: string, amount: number, decimalDigits?: number): string {
	const converted = amount * (rates[code] | 1);

	let result: string;

	if (arguments.length >= 3)
		result = converted.toFixed(decimalDigits);

	else
		result = converted.toString();

	return `${ result } UAH`;
}
