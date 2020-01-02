const { goto, assert } = require("../../helpers/test-dom");

goto("/curr", async ({ page }) => {
	assert(await page.$("#rates-container"), "Element '#rates-container' is not found");
});
