import { resolve } from "path";
import htmlOptions from "./html-options";

/** @private */
const pathEqualityMapEntries = Object.entries({
	[resolve("dist/index.html")]: [
		"/",
		"index.html",
		"/index.html",
	],
	[resolve("dist/smth.html")]: [
		"smth.html",
		"/smth.html",
	],
	[resolve("dist/smth/index.html")]: [
		"smth/",
		"/smth/",
		"smth/index.html",
		"/smth/index.html",
	],
});

/** @private */
function getResolvedTemplatePath(path: string): string | undefined {
	return htmlOptions("", path, []).filename;
}

describe("htmlOptions (webpack helper)", () => {
	const options = htmlOptions("Something", "some.html", []);

	it("produces options for HtmlWebpackPlugin constructor", () => {
		expect(options.constructor).toBe(Object);
	});

	it("automatically adds instruction to remove comments", () => {
		expect(options).toHaveProperty("minify.removeComments", true);
	});

	it("resolves target template path relative to dist/ dir", () => {
		for (const [ target, pathVariants ] of pathEqualityMapEntries)
			for (const path of pathVariants)
				expect(getResolvedTemplatePath(path)).toEqual(target);

		expect(() => getResolvedTemplatePath("smth")).toThrow();
	});
});
