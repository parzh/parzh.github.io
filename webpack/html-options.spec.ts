import { resolve } from "path";
import htmlOptions from "./html-options";

describe("htmlOptions (webpack helper)", () => {
	const options = htmlOptions("Something", "some.html", []);

	it("produces options for HtmlWebpackPlugin constructor", () => {
		expect(options.constructor).toBe(Object);
	});

	it("automatically adds instruction to remove comments", () => {
		expect(options).toHaveProperty("minify.removeComments", true);
	});

	it("properly references template boilerplate", () => {
		expect(options).toHaveProperty("template", resolve(__dirname, "template.ejs"));
	});
});
