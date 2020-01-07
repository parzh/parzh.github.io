//@ts-check
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @param {string[]} segments
 * @returns {string}
 */
function resolve(...segments) {
	return path.resolve(__dirname, ...segments);
}

/**
 * @type {import("webpack").Configuration}
 */
const config = {
	entry: {
		index: resolve("src"),
		curr: resolve("src/curr"),
	},
	module: {
		rules: [
			{ test: /\.css$/, use: [ "style-loader", "css-loader" ] },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve("src/index.html"),
			chunks: [ "index" ],
		}),
		new HtmlWebpackPlugin({
			template: resolve("src/curr/index.html"),
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
