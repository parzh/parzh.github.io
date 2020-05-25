import type { Configuration } from "webpack";

import { smart as merge } from "webpack-merge";
import { resolve } from "path";
import createHTML from "./create-html";

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
interface Overrides extends Configuration {
	entry: string[];
}

/** @private */
const createConfig = (overrides: Overrides): Configuration => merge(defaults, overrides);

/** @public */
const config: Configuration[] = [
	createConfig({
		entry: [
			resolve("src"),
		],
		plugins: [
			createHTML("GitHub Pages"),
			createHTML("Page not found", "404.html", []),
		],
		output: {
			path: resolve("dist"),
		},
	}),
	createConfig({
		entry: [
			resolve("src/curr"),
		],
		plugins: [
			createHTML("Curr"),
		],
		output: {
			path: resolve("dist/curr"),
		},
	}),
];

export default config;
