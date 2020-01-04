declare namespace goto {
	export interface Results {
		response: import("puppeteer").Response | null;
		page: import("puppeteer").Page;
	}
	
	export interface Callback {
		(results: Results): unknown
	}
}
