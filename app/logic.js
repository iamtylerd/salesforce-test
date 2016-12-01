'use strict';



module.exports.inputNum = (num) => {
	// Eratosthenes algorithm to find all primes under n
    let array = []
    let upperLimit = Math.sqrt(num)
    let output = [];

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
            output.push(i);
        }
    }
	console.log(output)
};
