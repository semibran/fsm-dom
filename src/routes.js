import { p, div, main, button } from "./lib/vdom"

export { home, select, option }

const home = (state, actions) =>
	main({ class: "page -home" }, [
		p({ class: "menu-title" }, "Main Menu"),
		div({ class: "menu-buttons" }, [
			button({ class: "menu-button -campaign", disabled: "disabled" }, "Campaign"),
			button({ class: "menu-button -select", onclick: actions.reroute(select) }, "Map Select"),
			button({ class: "menu-button -option", onclick: actions.reroute(option) }, "Option")
		])
	])

const select = (state, actions) =>
	main({ class: "page -select" }, [
		p({ class: "menu-title" }, "Map Select"),
		div({ class: "menu-maps" }, [
			div({ class: "menu-map" }),
			div({ class: "menu-map" }),
			div({ class: "menu-map" })
		]),
		button({ class: "menu-button -back", onclick: actions.reroute(home) }, "Back")
	])

const option = (state, actions) =>
	main({ class: "page -option" }, [
		p({ class: "menu-title" }, "Option"),
		button({ class: "menu-button -back", onclick: actions.reroute(home) }, "Back")
	])
