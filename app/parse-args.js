'use strict';

module.exports = (args) => {
	if(args <1) {
		process.stdout.write("Please enter an integer\n")
	}
	let number = args[0]
	return number
}
