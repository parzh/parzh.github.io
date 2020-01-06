import clearNode from "./clear-node";

/**
 * @param {Element | null} node
 * @param {string | number} text
 * @returns {void}
 */
export default function setNodeText(node, text) {
	if (!node)
		throw new Error("'node' is null");

	clearNode(node);
	node.insertAdjacentText("afterbegin", String(text));
}
