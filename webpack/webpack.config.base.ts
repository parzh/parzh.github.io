import { resolve } from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

/** @private */
const template = resolve("./webpack/index.ejs");

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
		new HtmlWebpackPlugin({
			template,
			title: "GitHub Pages",
			filename: resolve("./dist/index.html"),
			chunks: [ "main" ],
			minify: {
				removeComments: true,
			},
		}),
		new HtmlWebpackPlugin({
			template,
			title: "Curr",
			filename: resolve("./dist/curr/index.html"),
			chunks: [ "curr" ],
			minify: {
				removeComments: true,
			},
		}),
		new HtmlWebpackPlugin({
			template,
			title: "Page not found",
			filename: resolve("./dist/404.html"),
			chunks: [],
			minify: {
				removeComments: true,
			},
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: resolve("./dist"),
	},
};

export default config;
