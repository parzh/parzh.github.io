const puppeteer = require("puppeteer");
const getIndexHtml = require("./get-index-html");

require("./exception-listeners");

// ***

/** @typedef {import("puppeteer")} puppeteer */
/** @typedef {{ response: puppeteer.Response | null; page: puppeteer.Page }} GotoResults */
/** @typedef {(results: GotoResults) => unknown} GotoCallback */
void 0;

// ***

/**
 * @public
 * @param {any} value
 * @param {string} message
 */
function assert(value, message) {
	if (!value) {
		process.nextTick(process.exit, 1);
		throw new Error(`AssertionError: ${ message }`);
	}
}

/**
 * @public
 * @param {string} path
 * @param {GotoCallback} [callback]
 */
async function goto(path, callback = () => {}) {
	const pageUrl = await getIndexHtml(path);

	if (!pageUrl)
		throw new Error(`Path not found: "${ path }/index.html"`);

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
