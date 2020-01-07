const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @private */
const resolve = path.resolve.bind(null, __dirname);

/**
 * @type {import("webpack".Configuration)}
 */
const config = {
	entry: {
		index: resolve("src/index.js"),
		curr: resolve("src/curr/index.js"),
	},
	module: {
		rules: [
			{ test: /\.css$/, use: [ "style-loader", "css-loader" ] },
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
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
