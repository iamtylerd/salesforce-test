#!/usr/bin/env node
'use strict';

// You are given a function 'secret()' that accepts a single integer parameter and returns an integer. In your favorite programming language, write a command-line program that takes one command-line argument (a number) and determines if the secret() function is additive [secret(x+y) = secret(x) + secret(y)], for all combinations x and y, where x and y are all prime numbers less than the number passed via the command-line argument. Describe how to run your examples. Please generate the list of primes without using built-in functionality.


const { argv: [,, ...args] } = process
const number  = require('./parse-args')(args)
const {inputNum, isSecretAdditive} = require('./logic')

let primeNums = inputNum(number)
let consoleOutput = isSecretAdditive(primeNums)



//Check for a false from our additive function check
if (flatten(consoleOutput).indexOf(false) > -1) {
	console.log("The secrect function is not additive")
} else {
	console.log("The secrect function is additive")
}


//Flattens the array one level and allows us to look for a false
let flatten = (arr) => {
	return [].concat(...arr)
}

