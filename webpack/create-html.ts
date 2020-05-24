import HtmlWebpackPlugin from "html-webpack-plugin";
import htmlOptions from "./html-options";

export default function createHTML(...args: Parameters<typeof htmlOptions>): HtmlWebpackPlugin {
	return new HtmlWebpackPlugin(htmlOptions(...args));
}
