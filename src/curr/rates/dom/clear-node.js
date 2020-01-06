/**
 * @param {Element} node
 * @returns {void}
 */
export default function clearNode(node) {
	while (node.firstChild)
		node.removeChild(node.firstChild);
}
