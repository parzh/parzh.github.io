const puppeteer = require("puppeteer");

/** @typedef {import("puppeteer")} puppeteer */
/** @typedef {{ response: puppeteer.Response | null; page: puppeteer.Page }} GotoResults */
/** @typedef {(results: GotoResults) => unknown} GotoCallback */
void 0;

/**
 * @public
 * @param {any} value
 * @param {string} message
 */
function assert(value, message) {
	if (!value) {
		process.nextTick(process.exit, 1);
		throw new Error([ "AssertionError", message ].join(": "));
	}
}

/**
 * @public
 * @param {string} pageUrl
 * @param {GotoCallback} [callback]
 */
async function goto(pageUrl, callback = () => {}) {
	if (!pageUrl)
		throw new Error("No page URL is provided");

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

module.exports = { goto, assert };
