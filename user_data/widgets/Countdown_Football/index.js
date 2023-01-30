module.exports = {
	name: "Countdown Football",
	description: "Shows a customizeable countdown to a target date / time",
	category: "Football",
	icon: "stopwatch",
	hasEntries: false,
	default: {
		//style: {
		//	horizontal_position: "left",
		//	vertical_position: "top",
		//	width: "50"
			
		//},
		props: {
			type: "timer",
			seconds: "00:00",
			count_up: true,
			running: false,
			format: "$MM minutes $SS seconds"
		}
	},
	props: [
		{
			name: "teamAname",
			description: "Team A name",
			type: "String"
		},
		{
			name: "teamBname",
			description: "Team B name",
			type: "String"
		},
		{
			name: "colorA",  //COLOUR INPUT A
			description: "Team A Colour",
			type: "ColorPicker"
		},
		{
			name: "colorB",  //COLOUR INPUT B
			description: "Team B Colour",
			type: "ColorPicker"
		},
		{
			color: "rgba(255,255,255,1)"
		},
		{
			name: "scoreA",
			description: "Team A score",
			type: "Number"
		},
		{
			name: "scoreB",
			description: "Team B score",
			type: "Number"
		},
		{
			name: "running",
			description: "Timer is running",
			type: "Radio",
			options: [
				{
					name: "Running",
					value: true
				},
				{
					name: "Paused",
					value: false
				}
			]
		},
		{
			name: "redbtn",
			description: "Red Timer box",
			type: "Radio",
			options: [
				{
					name: "On",
					value: true
				},
				{
					name: "Off",
					value: false
				}
			]
		},
		{
			name: "type",
			description:
				"Timer type",
			type: "Radio",
			options: [
				{
					name: "Countdown",
					value: "countdown"
				},
				{
					name: "Timer",
					value: "timer"
				}
			]
		},
		{
			name: "seconds",
			description: "Start time",
			type: "String"
		},
		{
			name: "count_up",
			description: "Continue counting after reaching 0",
			type: "Radio",
			options: [
				{
					name: "Stop at zero",
					value: true
				},
				{
					name: "Continue",
					value: true
				}
			]
		},
		{
			name: "format",
			description: "Countdown format",
			type: "Select",
			options: [
				{
					name: "Time in words",
					value: "humanize"
				},
				{
					name: "D days HH hours MM minutes SS seconds",
					value: "$D days $HH hours $MM minutes $SS seconds"
				},
				{
					name: "D:HH:MM:SS",
					value: "$D:$HH:$MM:$SS"
				},
				{
					name: "HH:MM:SS",
					value: "$HH:$MM:$SS"
				},
				{
					name: "MM:SS",
					value: "$MM:$SS"
				},
				{
					name: "M:S",
					value: "$M:$S"
				},
				{
					name: "Custom format",
					value: "custom"
				}
			]
		}
	],
	// methods: {
	// 	pauseresume () {
	// 		this.props.running = !this.props.running
	// 		this.save()
	// 		return true
	// 	}
	// },
	// actions: [
	// 	{
	// 		name: "pauseresume",
	// 		title: "Pause / resume",
	// 		description: "Pause / resume the countdown clock (will not adjust target)",
	// 		type: "Button",
	// 		style: { type: "warning" },
	// 		method: "pauseresume"
	// 	}
	// ],
	vue_template: '<div class="countdown"><h1 style=" display: inline; width: 15px; font-size: 1.1em; position:absolute; top:79px; left:123px; margin-left: 103px;">{{teamAname}}</h1><h2 style="display: inline-block; text-align: center; width:50px; font-size: 1em; position:absolute; top:90px; left:316px; margin-left: 7px" >{{scoreA}}</h2><h2 style="display: inline-block; text-align: center; width:50px; font-size: 1em; position:absolute; top:90px; left:372px; margin-left: 10px">{{scoreB}}</h2><h1 style=" display: inline; font-size: 1.1em; position:absolute; top:79px; left:453px;">{{teamBname}}</h1><span :style="cssVars" class="counter">{{counter}}</span></div> <div class="colorA" :style="solidColorStyle"> </div><div class="colorB" :style="solidColorStyle"></div> ',
	vue_component: getFile("component.js").toString(),
	css: ".countdown{font-variant-numeric: tabular-nums; background: url(/mediafiles/score_board.png); background-repeat:no-repeat; padding: 83px 113px!important;} .counter{display: inline-block; margin-left: 5px; position:absolute; top:83px; left:542px; padding:6.5px 10px;} .colorA {width: 100%; height: 100px; position: absolute; top: 100px; left: 1000px; } .colorB {width: 100%; height: 100px; position: relative; top: 100px; left: 1000px; }"
}
