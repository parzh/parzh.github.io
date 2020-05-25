import { smart as merge } from "webpack-merge";
import prod from "./webpack.config.prod";

/** @public */
const config = merge(prod, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		hot: true,
	},
});

export default config;
