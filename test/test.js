
'use strict';
const { exec } = require('child_process')
const { property, isFunction, strictEqual, deepEqual, oneOf } = require('chai').assert
const {inputNum, isSecretAdditive} = require('../app/logic.js')
const parse = require('../app/parse-args')

describe('app', () => {

  describe('parse args', () => {
  	it('should return the integer that was input', () => {
  		const expected = 15;
  		strictEqual(parse(15), expected)
  	})
  })
  describe('inputNum', () => {
  	it('should be a function', () => {
        isFunction(inputNum);
    });
  	it('should return primes lower than the number inputted', () => {
  		const expected = [ 2, 3, 5, 7, 11, 13 ];
  		deepEqual(inputNum(15), expected)
  	})
  	it('should not return any duplicates', () => {
  		oneOf(2, inputNum(150))
  	})
  })
  describe('isSecretAdditive', () => {
  	it('should return true', () => {
  		const expected = [[true]]
  		const primeArray = [2, 3]
  		deepEqual(isSecretAdditive(primeArray), expected)
  	})
  })
})



