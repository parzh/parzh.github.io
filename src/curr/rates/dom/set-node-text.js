import clearNode from "./clear-node";

/**
 * @param {Element} node
 * @param {string | number} text
 * @returns {void}
 */
export default function setNodeText(node, text) {
	clearNode(node);
	node.insertAdjacentText("afterbegin", text);
}
