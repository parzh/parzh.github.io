import { promisify } from "util";
import { exists } from "fs";
import { resolve, isAbsolute } from "path";
import { pathToFileURL } from "url";

/** @private */
const fileExists = promisify(exists);

/** @private */
const resolveSrc = resolve.bind(null, process.env.PACKAGE_HOME!, "dist");

export default async function getPathToTemplate(path: string): Promise<string> {
	const dir = isAbsolute(path) ? "." + path : path;
	const indexFile = resolveSrc(dir, "index.html");

	if (await fileExists(indexFile))
		return pathToFileURL(indexFile).toString();

	else
		throw new Error(`Template file not found: "${ indexFile }"`);
}
