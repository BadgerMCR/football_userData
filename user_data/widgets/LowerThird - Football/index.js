module.exports = {
	name: "Lower Third - Football",
	description: "Displays a lower third for a football game",
	category: "Football",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,

	//default: {
		//style: {
			//horizontal_position: "left",
			//vertical_position: "bottom",
			//width: "50"
		//}
	//},

	entry_props: [
		{
			name: "name",
			description: "Name",
			type: "String"
		},
		{
			name: "number",
			description: "number",
			type: "String"
		},
		{
			name: "team",
			description: "team",
			type: "String"
		}
	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}
