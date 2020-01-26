import HtmlWebpackPlugin from "html-webpack-plugin";
import createHTML from "./create-html";

describe("createHTML (webpack helper)", () => {
	it("creates instance of HtmlWebpackPlugin", () => {
		expect(createHTML("", "smth.html", [])).toBeInstanceOf(HtmlWebpackPlugin);
	});
});
