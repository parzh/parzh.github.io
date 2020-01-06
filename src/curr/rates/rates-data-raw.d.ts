export interface RatesDataRawItem {
	// essential
	rate: number;
	cc: string;

	// junk
	r030: number;
	txt: string;
	exchangedate: string;
}

export type RatesDataRaw = RatesDataRawItem[];
