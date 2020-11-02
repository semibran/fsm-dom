import { p, div, main, button } from "./lib/vdom"

export { home }

const home = (state, actions) =>
	main({ class: "page -home" }, [
		p({ class: "menu-title" }, "Main Menu"),
		div({ class: "menu-buttons" }, [
			button({ class: "menu-button -campaign" }, "Campaign"),
			button({ class: "menu-button -select" }, "Map Select"),
			button({ class: "menu-button -option" }, "Option")
		])
	])
