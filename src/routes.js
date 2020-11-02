import { p, div, main, button } from "./lib/vdom"

export { home, option }

const home = (state, actions) =>
	main({ class: "page -home" }, [
		p({ class: "menu-title" }, "Main Menu"),
		div({ class: "menu-buttons" }, [
			button({ class: "menu-button -campaign", disabled: "disabled" }, "Campaign"),
			button({ class: "menu-button -select", disabled: "disabled" }, "Map Select"),
			button({ class: "menu-button -option", onclick: actions.reroute(option) }, "Option")
		])
	])

const option = (state, actions) =>
	main({ class: "page -option" }, [
		p({ class: "menu-title" }, "Option"),
		button({ class: "menu-button -back", onclick: actions.reroute(home) }, "Back")
	])
