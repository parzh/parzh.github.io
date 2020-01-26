import { resolve } from "path";
import { Options } from "html-webpack-plugin";

/** @private */
const template = resolve(__dirname, "index.ejs");

export default function htmlOptions(title: string, targetPath: string, chunks: string[]): Options {
	if (targetPath.startsWith("/"))
		targetPath = "." + targetPath;

	const targetFileChunks: string[] = [ targetPath ];

	if (targetPath.endsWith("/"))
		targetFileChunks.push("index.html");

	else if (!targetPath.endsWith(".html"))
		throw new Error("`targetPath` must end with either '.html' or '/'");

	return {
		title,
		template,
		chunks,
		filename: resolve(__dirname, "../dist", ...targetFileChunks),
		minify: {
			removeComments: true,
		},
	};
}
