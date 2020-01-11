/** @private */
interface RatesDataRawItem {
	// essential
	rate: number;
	cc: string;

	// junk
	r030: number;
	txt: string;
	exchangedate: string;
}

/** @private */
type RatesDataRaw = RatesDataRawItem[];

/** @private */
const URL_BASE = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=";

/** @internal */
export default async function fetchRate(code: string): Promise<number> {
	const response = await fetch(URL_BASE + code);
	const [ data ] = await response.json() as RatesDataRaw;

	return data.rate;
}
