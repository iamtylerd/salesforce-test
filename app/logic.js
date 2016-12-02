'use strict';

module.exports.inputNum = (num) => {
//Note of sieve of era
    let array = []
    let upperLimit = Math.sqrt(num)
    let primes = [];

    for (var i = 0; i < num; i++) {
        array.push(true);
    }

    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < num; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < num; i++) {
        if(array[i]) {
            primes.push(i);
        }
    }
	return primes
};

module.exports.isSecretAdditive = (primeArray) => {
	let secret = (num) => {
		// return Math.pow(num, 5);
		return num;
	}
	let completedFunc = primeArray.slice(0, -1).map((first, i) => {
		return primeArray.slice(i + 1).map((second) => {
			return secret(first) + secret(second) == secret(first + second);

		})

	})
	return completedFunc
}
