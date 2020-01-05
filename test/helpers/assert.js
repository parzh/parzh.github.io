/**
 * @public
 * @param {any} value
 * @param {string} message
 */
module.exports =
function assert(value, message) {
	if (!value) {
		process.nextTick(process.exit, 1);
		throw new Error(`AssertionError: ${ message }`);
	}
}
