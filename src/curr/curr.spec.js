const { pathToFileURL } = require("url");
const { goto, assert } = require("../../test-dom");

/** @private */
const PAGE_URL = pathToFileURL(__dirname + "/index.html").toString();

goto(PAGE_URL, async ({ page }) => {
	assert(await page.$("#rates-container"), "Element '#rates-container' is not found");
});
