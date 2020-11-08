import { body, header, div, ul, li, p, span, button } from "./lib/vdom"

export { home, select, option, game }

const home = (state, actions) =>
	body({ class: "page -home" }, [
		header({ class: "menu-header" }, [
			p({ class: "menu-title" }, "Main Menu")
		]),
		div({ class: "menu-buttons" }, [
			button({ class: "menu-button button -campaign", disabled: "disabled" }, "Campaign"),
			button({ class: "menu-button button -select", onclick: actions.reroute(select) }, "Map Select"),
			button({ class: "menu-button button -option", onclick: actions.reroute(option) }, "Option")
		])
	])

const select = (state, actions) =>
	body({ class: "page -select" }, [
		header({ class: "menu-header" }, [
			p({ class: "menu-title" }, "Map Select"),
			p({ class: "menu-subtitle" }, "Select a map to begin play."),
		]),
		ul({ class: "menu-map-list" }, [
			li({ class: "menu-map-item" }, [
				span({ class: "menu-map-name" }, "Map 1"),
				div({ class: "menu-map", onclick: actions.reroute(game) })
			]),
			li({ class: "menu-map-item" }, [
				span({ class: "menu-map-name" }, "Map 2"),
				div({ class: "menu-map -disabled" })
			]),
			li({ class: "menu-map-item" }, [
				span({ class: "menu-map-name" }, "Map 3"),
				div({ class: "menu-map -disabled" })
			])
		]),
		button({ class: "button -back", onclick: actions.reroute(home) }, "Back")
	])

const option = (state, actions) =>
	body({ class: "page -option" }, [
		header({ class: "menu-header" }, [
			p({ class: "menu-title" }, "Option")
		]),
		button({ class: "button -back", onclick: actions.reroute(home) }, "Back")
	])

const game = (state, actions) =>
	body({ class: "page -game" }, [
		"Game",
		button({ class: "button -pause", onclick: actions.reroute(pause) }, "Pause")
	])

const pause = (state, actions) =>
	body({ class: "page -game-pause" }, [
		"Game",
		div({ class: "modal" }, [
			button({ class: "modal-button button -close", onclick: actions.reroute(game) }, "Close"),
			button({ class: "modal-button button -return", onclick: actions.reroute(home) }, "Return to menu")
		])
	])
