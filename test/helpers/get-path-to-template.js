const { promisify } = require("util");
const { exists } = require("fs");
const { resolve, isAbsolute } = require("path");
const { pathToFileURL } = require("url");

/** @private */
const fileExists = promisify(exists);

/** @private */
const resolveSrc = resolve.bind(null, process.env.PACKAGE_HOME, "src");

/**
 * @internal
 * @param {string} path
 */
module.exports =
async function getPathToTemplate(path) {
	const dir = isAbsolute(path) ? "." + path : path;
	const indexFile = resolveSrc(dir, "index.html");

	if (await fileExists(indexFile))
		return pathToFileURL(indexFile).toString();

	else
		throw new Error(`Template file not found: "${ indexFile }"`);
}
