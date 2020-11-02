export default (tag, data, content) => {
	if (Array.isArray(data) || typeof data === "string") {
		content = data
		data = null
	}
	if (typeof content === "string") {
		content = [ content ]
	}
	return { tag, data, content }
}
