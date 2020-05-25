import type { Configuration } from "webpack";

import { smart as merge } from "webpack-merge";
import { resolve } from "path";
import createHTML from "./create-html";

/** @private */
const SRC_PATH = resolve(__dirname, "../src");

/** @private */
const DIST_PATH = resolve(__dirname, "../dist");

/** @private */
const defaults: Configuration = {
	mode: "production",
	entry: [
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
	output: {
		filename: "bundle.js",
	},
};

/** @private */
interface Overrides extends Configuration {
	entry: string[];
}

/** @private */
const createConfig = (overrides: Overrides): Configuration => merge(defaults, overrides);

/** @public */
const config: Configuration[] = [
	createConfig({
		entry: [
			SRC_PATH,
		],
		plugins: [
			createHTML("GitHub Pages"),
			createHTML("Page not found", "404.html", []),
		],
		output: {
			path: DIST_PATH,
		},
	}),
	createConfig({
		entry: [
			resolve(SRC_PATH, "curr"),
		],
		plugins: [
			createHTML("Curr"),
		],
		output: {
			path: resolve(DIST_PATH, "curr"),
		},
	}),
];

export default config;
