'use strict';

module.exports = (args) => {
	let number = +args
	if(!Number.isInteger(number)) {
		console.error("Please enter an integer")
		process.exit(1)
	}
	return number
}
