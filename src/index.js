import routes from "./routes"
import manifest from "./lib/manifest"

let state = {
	route: "/"
}

let tree = routes[state.route]
console.log(tree)

let el = manifest(tree)
document.body.appendChild(el)
