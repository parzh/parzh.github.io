const content = document.getElementById("content");

if (!content)
	throw new Error("Element '#content' is not found!");

content.insertAdjacentText("beforeend", ", move along!");
