import type { Configuration } from "webpack";

import { resolve } from "path";
import createHTML from "./create-html";

/** @private */
const SRC_PATH = resolve(__dirname, "../src");

/** @private */
const config: Configuration = {
	mode: "production",
	entry: SRC_PATH,
	resolve: {
		extensions: [ ".js", ".json", ".ts", ".tsx" ],
		alias: {
			"src": resolve(SRC_PATH),
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
		],
	},
	plugins: [
		createHTML("GitHub Pages"),
		createHTML("Page not found", "404.html", []),
	],
	output: {
		path: resolve(__dirname, "../dist"),
		filename: "bundle.[hash].js",
	},
};

export default config;
