module.exports = {
	name: "footballtest",
	description: "Displays a test for football",
	category: "Rugby",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "left",
			vertical_position: "bottom",
			width: "50"
		}
	},
	entry_props: [
		{
			name: "position",
			description: "Position/Title",
			type: "String"
		},
		{
			name: "RB",
			description: "Right Back",
			type: "String"
		},
		{
			name: "CB1",
			description: "Centre Back 1",
			type: "String"
		},
		{
			name: "CB2",
			description: "Centre Back 2",
			type: "String"
		},
		{
			name: "CB3",
			description: "Centre Back 3",
			type: "String"
		},
		{
			name: "LB",
			description: "Left Back",
			type: "String"
		},
	],



	vue_template: renderPug(getFile("template.pug").toString()),
	vue_component: getFile("component.js").toString(),
	css: renderStylus(getFile("style.styl").toString())
}
