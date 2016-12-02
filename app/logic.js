'use strict';

module.exports.inputNum = (num) => {
//JavaScript implementaion of the Sieve of Eratosthenes
    let array = []
    let upperLimit = Math.sqrt(num)
    let primes = [];

//Starts the array at 2 and ends at num - 1
    for (var i = 0; i < num; i++) {
        array.push(true);
    }
//Checks and deletes any multiples
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < num; j += i) {
                array[j] = false;
            }
        }
    }
//Final array of primes
    for (var i = 2; i < num; i++) {
        if(array[i]) {
            primes.push(i);
        }
    }
	return primes
};

module.exports.isSecretAdditive = (primeArray) => {
	//Add secret function
	// let secret = (num) => {
	// 	// return Math.pow(num, 5);
	// 	return num;
	// }

	//2 arrays we slice the last number from the first array and the first number from the second array to avoid comparing to itself and getting undefined
	let completedFunc = primeArray.slice(0, -1).map((first, i) => {
		return primeArray.slice(i + 1).map((second) => {
			return secret(first) + secret(second) == secret(first + second);

		})

	})
	return completedFunc
}
