const { pathToFileURL } = require("url");
const { goto, assert } = require("./test-dom");

/** @private */
const PAGE_URL = pathToFileURL(__dirname + "/index.html").toString();

goto(PAGE_URL, async ({ page }) => {
	const contentNode = await page.$("#content");

	if (!contentNode)
		assert(false, "Element '#content' is not found");

	else {
		const textContent = await contentNode.evaluate((element) => element.textContent);

		assert(
			textContent === "Nothing to see here, move along!",
			"Element '#content' holds incorrect text"
		);
	}
});
