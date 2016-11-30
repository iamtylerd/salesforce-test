
'use strict';
const request = require('supertest')
const { property, isFunction } = require('chai').assert
const {inputNum} = require('../app/index.js')

describe('app', () => {

  describe('take params', () => {
    it('should be a function', () => {
        isFunction(inputNum);
    });
  });
})
