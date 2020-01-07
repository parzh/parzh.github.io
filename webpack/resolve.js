//@ts-check
const path = require("path");

/**
 * @param {string[]} segments
 * @returns {string}
 */
module.exports =
function resolve(...segments) {
	return path.resolve(__dirname, "..", ...segments);
}
