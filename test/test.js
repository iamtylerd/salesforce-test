
'use strict';
const request = require('supertest')
const { property, isFunction } = require('chai').assert
const {inputNum} = require('../app/logic.js')

describe('app', () => {

  describe('take params', () => {
    it('should be a function', () => {
        isFunction(inputNum);
    });
  });
})

//child process on integration test
// parse args unit test postive case
