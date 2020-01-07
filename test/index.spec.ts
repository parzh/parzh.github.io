import goto from "./helpers/goto";
import assert from "./helpers/assert";

goto("/", async ({ page }) => {
	const containerNode = await page.$("p.container");

	if (!containerNode)
		assert(false, "Element 'p.container' is not found");

	else {
		const textContent = await containerNode.evaluate((element) => element.textContent);

		assert(
			textContent === "Nothing's here, move along!",
			"Element 'p.container' holds incorrect text"
		);
	}

	// ***

	const pagagraphNodes = await page.$$("p");

	assert(
		pagagraphNodes.length === 1,
		"There should be exactly one <p> element on the page",
	);
});
