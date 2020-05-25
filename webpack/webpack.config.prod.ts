import type { Configuration } from "webpack";

import { resolve } from "path";
import createHTML from "./create-html";

/** @private */
const SRC_PATH = resolve(__dirname, "../src");

/** @private */
const config: Configuration = {
	mode: "production",
	entry: [
		SRC_PATH,
		"react-hot-loader/patch",
	],
	resolve: {
		extensions: [ ".js", ".json", ".ts", ".tsx" ],
		alias: {
			"react-dom": "@hot-loader/react-dom",
			"api": resolve(SRC_PATH, "api"),
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
		filename: "bundle.js",
	},
};

export default config;
