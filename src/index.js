import { home } from "./routes"
import manifest from "./lib/manifest"
import patch from "./lib/patch"

let state = { route: home }
let actions = {
	reroute: route => _ => {
		let tree = route(state, actions)
		patch(view, tree)
		state.route = route
	}
}

let tree = state.route(state, actions)
console.log(tree)

let view = manifest(tree)
document.body.appendChild(view)
