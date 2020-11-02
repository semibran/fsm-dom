import h from "./vh.js"

export { main, header, footer, div, ul, li, p, span, button }

const main = (data, content) =>
	h("main", data, content)

const header = (data, content) =>
	h("header", data, content)

const footer = (data, content) =>
	h("footer", data, content)

const div = (data, content) =>
	h("div", data, content)

const ul = (data, content) =>
	h("ul", data, content)

const li = (data, content) =>
	h("li", data, content)

const p = (data, content) =>
	h("p", data, content)

const span = (data, content) =>
	h("span", data, content)

const button = (data, content) =>
	h("button", data, content)
