import h from "./vh.js"

export { p, span, div, main, button }

const p = (data, content) =>
	h("p", data, content)

const span = (data, content) =>
	h("span", data, content)

const div = (data, content) =>
	h("div", data, content)

const main = (data, content) =>
	h("main", data, content)

const button = (data, content) =>
	h("button", data, content)
