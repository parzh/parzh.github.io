//@ts-check
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @param {string[]} segments
 * @returns {string}
 */
function resolve(...segments) {
	return path.resolve(__dirname, "..", ...segments);
}

/** @private */
const templatePath = resolve("src/template.ejs");

/**
 * @type {import("webpack").Configuration}
 */
const config = {
	entry: {
		index: resolve("src"),
		curr: resolve("src/curr"),
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
		new HtmlWebpackPlugin({
			title: "GitHub Pages",
			template: templatePath,
			filename: resolve("dist/index.html"),
			chunks: [ "index" ],
		}),
		new HtmlWebpackPlugin({
			title: "Curr",
			template: templatePath,
			filename: resolve("dist/curr/index.html"),
			chunks: [ "curr" ],
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: resolve("dist"),
	},
};

module.exports = config;
