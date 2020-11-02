// vh(tag, data, content) -> vnode
// vh(tag, content) -> vnode
// > creates an html vnode with the specified params
// > vnode has type { tag: string, data: obj | null, content: vnode[] } | prim
export default (tag, data, content) => {
	if (Array.isArray(data) || typeof data === "string") {
		content = data
		data = null
	}
	if (typeof content === "string") {
		content = [ content ]
	}
	if (!content) {
		content = []
	}
	return { tag, data, content }
}
