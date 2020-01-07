//@ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = require("./resolve");

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
			template: resolve("webpack/index.ejs"),
			filename: resolve("dist/index.html"),
			chunks: [ "index" ],
		}),
		new HtmlWebpackPlugin({
			title: "Curr",
			template: resolve("webpack/index.ejs"),
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
