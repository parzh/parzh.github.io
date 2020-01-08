import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import fromRoot from "./from-root";

export default <Configuration> {
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
