const { goto, assert } = require("../helpers/test-dom");

goto("/", async ({ page }) => {
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

	// ***

	const pagagraphNodes = await page.$$("p");

	assert(
		pagagraphNodes.length === 1,
		"There should be only one <p> element on the page",
	);
});
