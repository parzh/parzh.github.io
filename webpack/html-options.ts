import type { Options } from "html-webpack-plugin";
import { resolve } from "path";

/** @private */
const template = resolve(__dirname, "index.ejs");

export default (title: string, filename = "index.html"): Options => ({
	title,
	template,
	filename,
	minify: {
		removeComments: true,
	},
});
