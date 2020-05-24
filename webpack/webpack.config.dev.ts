import type { Configuration } from "webpack";
import { smart as merge } from "webpack-merge";
import prod from "./webpack.config.prod";

/** @private */
const overrides: Configuration = {
	mode: "development",
	devtool: "source-map",
	devServer: {
		hot: true,
	},
};

/** @public */
const config = prod.map((config) => merge(config, overrides));

export default config;
