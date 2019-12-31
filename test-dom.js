const puppeteer = require("puppeteer");

/** @typedef {import("puppeteer")} puppeteer */
/** @typedef {{ response: puppeteer.Response | null; page: puppeteer.Page }} GotoResults */
/** @typedef {(results: GotoResults) => any} Callback */
void 0;

/**
 * @public
 * @param {boolean} condition
 * @param {string} message
 * @param {any[]} data
 */
function assert(condition, message, ...data) {
	if (!condition)
		process.nextTick(process.exit, 1);

	console.assert(condition, message, ...data);
}

/**
 * @public
 * @param {string} pageUrl
 * @param {Callback} [callback]
 */
async function goto(pageUrl, callback = () => {}) {
	if (!pageUrl)
		throw new Error("No page URL is provided");

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	try {
		await callback({
			response: await page.goto(pageUrl),
			page,
		});
	}

	catch (error) {
		throw error;
	}

	finally {
		await browser.close();
	}
}

module.exports = { goto, assert };
