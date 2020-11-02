import h from "./vh.js"

export { p, div }

const p = (data, content) =>
	h("p", data, content)

const div = (data, content) =>
	h("div", data, content)
