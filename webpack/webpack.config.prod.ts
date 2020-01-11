import { Configuration } from "webpack";
import { smart as extend } from "webpack-merge";
import base from "./webpack.config.base";

/** @public */
const config: Configuration = extend(base, {
	mode: "production",
});

export default config;
