import { resolve } from "path";
import { Configuration } from "webpack";
import createHTML from "./helpers/create-html";

/** @public */
const config: Configuration = {
	entry: {
		main: resolve("./src"),
		curr: resolve("./src/curr"),
	},
	resolve: {
		extensions: [ ".js", ".json", ".ts", ".tsx" ],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ]
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		createHTML("GitHub Pages", "/", [ "main" ]),
		createHTML("Curr", "curr/", [ "curr" ]),
		createHTML("Page not found", "404.html", []),
	],
	output: {
		filename: "[name].bundle.js",
		path: resolve("./dist"),
	},
};

export default config;
