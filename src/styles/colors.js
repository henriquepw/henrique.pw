const colors = {
	red: '#af4448',
	pink: '#ba2d65',
	purple: '#883997',
	deepPurple: '#65499c',
	indigo: '#49599a',
	blue: '#2286c3',
	lightBlue: '#0093c4',
	cyan: '#009faf',
	teal: '#00867d',
	green: '#519657',
	deepOrange: '#c75b39'
};

const keys = Object.keys(colors);
const primarykey = keys[Math.floor(Math.random() * keys.length)];

export default {
	primaryColor: colors[primarykey],
	primaryTextColor: '#3d3d3d',
	secondaryTextColor: 'rgba(255, 255, 255, 0.4)'
};
