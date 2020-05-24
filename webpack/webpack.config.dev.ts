import { Configuration } from "webpack";
import { smart as extend } from "webpack-merge";
import prod from "./webpack.config.prod";

/** @public */
const config: Configuration = extend(prod, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		hot: true,
	},
});

export default config;
