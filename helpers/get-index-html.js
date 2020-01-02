const { promisify } = require("util");
const { exists: fsExists } = require("fs");
const { resolve } = require("path");
const { pathToFileURL } = require("url");

/** @private */
const exists = promisify(fsExists);

/**
 * @internal
 * @param {string} path
 */
module.exports =
async function getIndexHtml(path) {
	const indexFile = resolve(__dirname, "..", "src", "." + path, "index.html");

	if (await exists(indexFile))
		return pathToFileURL(indexFile).toString();

	else
		throw new Error(`Path not found: "${ path }/index.html"`);
}
