'use strict';
let assert = require("assert");
let fizzbuzz = require('../src/fizzbuzz.js');


describe('Fizz Buzz of', () => {
    it('should equal 1 if given 1', () => {
        assert.equal(1,fizzbuzz.of(1));
    });
    it('should equal 2 if given 2', () => {
        assert.equal(2, fizzbuzz.of(2));
    });
    it('should equal Fizz if given 3', () => {
        assert.equal("Fizz", fizzbuzz.of(3));
    });
    it('should equal Buzz if given 5', () => {
        assert.equal("Buzz", fizzbuzz.of(5));
    });
    it('should equal FizzBuzz if given 15', () => {
        assert.equal("FizzBuzz", fizzbuzz.of(15));
    });
    it('should equal Fizz if given 6', () => {
        assert.equal("Fizz", fizzbuzz.of(6));
    });

    it('should equal Buzz if given 10', () => {
        assert.equal("Buzz", fizzbuzz.of(10));
    });

    it('should equal FizzBuzz if given 30', () => {
        assert.equal("FizzBuzz", fizzbuzz.of(30));
    });
    it('should equal 0 if given 0', () => {
        assert.equal(0,fizzbuzz.of(0));
    });
});
