import { home } from "./routes"
import patch from "./lib/patch"

let state = { route: home }
let actions = {
	reroute: route => _ =>
		render({ ...state, route })
}

const render = state =>
	patch(document.body, state.route(state, actions))

render(state)
