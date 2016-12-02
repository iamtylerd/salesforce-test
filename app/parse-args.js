'use strict';

module.exports = (arg) => {
// +arg converts the arg to a number
	let number = +arg
//Check to make sure the input is an integer
	if(!Number.isInteger(number)) {
		console.error("Please enter an integer")
		process.exit(1)
	}
	return number
}
