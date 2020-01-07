import puppeteer, { Response, Page } from "puppeteer";
import getPathToTemplate from "./get-path-to-template";

/** @private */
interface Results {
	response: Response | null;
	page: Page;
}

/** @private */
interface Callback {
	(results: Results): unknown
}

export default async function goto(path: string, callback: Callback = () => { }): Promise<void> {
	const pageUrl = await getPathToTemplate(path);
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	try {
		await callback({ page, response: await page.goto(pageUrl) });
	}

	catch (error) {
		console.error(error);
		throw error;
	}

	finally {
		await browser.close();
	}
}
