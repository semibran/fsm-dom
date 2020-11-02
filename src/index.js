import { home } from "./routes"
import manifest from "./lib/manifest"

let state = { route: home }

let tree = state.route()
console.log(tree)

let el = manifest(tree)
document.body.appendChild(el)
