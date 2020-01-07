import goto from "../helpers/goto";
import assert from "../helpers/assert";

goto("/curr", async ({ page }) => {
	const ratesContainer = page.$(".RatesContainer");
	const expressionsContainer = page.$(".ExpressionsContainer");
	const resultContainer = page.$(".ResultContainer");

	assert(await ratesContainer, "Rates container is not found");
	assert(await expressionsContainer, "Expressions container is not found");
	assert(await resultContainer, "Result container is not found");
});
