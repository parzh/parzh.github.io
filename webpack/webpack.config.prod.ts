import type { Configuration } from "webpack";
import type { ConfigurationMergeFunction as Merge } from "webpack-merge";

import { smart as merge } from "webpack-merge";
import { resolve } from "path";
import createHTML from "./create-html";

/** @private */
const defaults: Configuration = {
	mode: "production",
	resolve: {
		extensions: [ ".js", ".json", ".ts", ".tsx" ],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	output: {
		filename: "bundle.js",
	},
};

/** @private */
const createConfig: Merge = (overrides) => merge(defaults, overrides);

/** @public */
const config: Configuration[] = [
	createConfig({
		entry: resolve("src"),
		plugins: [
			createHTML("GitHub Pages"),
		],
		output: {
			path: resolve("dist"),
		},
	}),
	createConfig({
		entry: resolve("src/curr"),
		plugins: [
			createHTML("Curr"),
		],
		output: {
			path: resolve("dist/curr"),
		},
	}),
	/*
	createConfig({
		entry: resolve("src/404"),
		plugins: [
			createHTML("Page not found", "404.html"),
		],
		output: {
			path: resolve("dist"),
			filename: "404.bundle.js",
		},
	}),
	*/
];

export default config;
