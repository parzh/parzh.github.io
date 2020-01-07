import goto from "../helpers/goto";
import assert from "../helpers/assert";

goto("/curr", async ({ page }) => {
	assert(await page.$("#rates-container"), "Element '#rates-container' is not found");
});
