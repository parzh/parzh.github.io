interface CreateRateNodeResult {
	rateNode: Element;
	exists: boolean;
}

interface Window {
	Curr: {
		EXPRESSION: string;
		URL_BASE: string;
		MAX_FETCH_ATTEMPTS: number;

		rates: Record<string, number>;

		convert(code: string, amount: number): number;
		toUAH(code: string, amount: number, decimalDigits?: number): string;
		fetchRate(code: string, attempts?: number): Promise<number>;
	};

	CurrDOM: {
		ratesContainer: HTMLElement;
		expressionsContainer: HTMLElement;
		expressionNode: HTMLElement;
		expressionConvertedNode: HTMLElement;
		resultContainer: HTMLElement;
		resultNode: HTMLElement;

		clearNode(node: Element): void;
		setNodeText(node: Element, text: string): void;
		createRateNode(code: string): CreateRateNodeResult;
		showRate(code: string): Promise<void>;
	};
}

interface RatesDataRawItem {
	// essential
	rate: number;
	cc: string;

	// junk
	r030: number;
	txt: string;
	exchangedate: string;
}

type RatesDataRaw = RatesDataRawItem[];
