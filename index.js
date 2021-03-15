const cowsay = require('cowsay');
const information = require('./information');

console.log(
	cowsay.say(
		{
			text: `I'm ${information.name} and I'm learning at the ${information.campus} Wild Code School campus`,
			e: 'oO',
			T: 'U '
		}
	)
);
