const goto = require("../helpers/goto");
const assert = require("../helpers/assert");

goto("/curr", async ({ page }) => {
	assert(await page.$("#rates-container"), "Element '#rates-container' is not found");
});
