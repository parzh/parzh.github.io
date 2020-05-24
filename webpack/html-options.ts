import type { Options } from "html-webpack-plugin";
import { resolve } from "path";

/** @private */
const template = resolve(__dirname, "template.ejs");

export default (title: string, filename = "index.html", chunks: Options["chunks"] = "all"): Options => ({
	title,
	template,
	filename,
	chunks,
	minify: {
		removeComments: true,
	},
});
