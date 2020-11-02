export default function manifest(node) {
	if (node instanceof Element) return node
	if (!node || typeof node !== "object") {
		return document.createTextNode(node)
	}
	let tag = node.tag
	let data = node.data
	let content = node.content
	let element = document.createElement(tag)
	for (let name in data) {
		let value = data[name]
		element[name] = value
		if (typeof value !== "function") {
			element.setAttribute(name, value)
		}
	}
	for (let i = 0; i < content.length; i++) {
		let child = manifest(content[i])
		element.appendChild(child)
	}
	return element
}
