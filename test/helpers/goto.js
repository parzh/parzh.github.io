/// <reference types="./types/goto" />

const puppeteer = require("puppeteer");
const getPathToTemplate = require("./get-path-to-template");

/**
 * @public
 * @param {string} path
 * @param {goto.Callback} [callback]
 */
module.exports =
async function goto(path, callback = () => { }) {
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
