//@ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fromRoot = require("./fromRoot");

/**
 * @type {import("webpack").Configuration}
 */
const config = {
	entry: {
		index: fromRoot("src"),
		curr: fromRoot("src/curr"),
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
			template: fromRoot("webpack/index.ejs"),
			filename: fromRoot("dist/index.html"),
			chunks: [ "index" ],
		}),
		new HtmlWebpackPlugin({
			title: "Curr",
			template: fromRoot("webpack/index.ejs"),
			filename: fromRoot("dist/curr/index.html"),
			chunks: [ "curr" ],
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: fromRoot("dist"),
	},
};

module.exports = config;
