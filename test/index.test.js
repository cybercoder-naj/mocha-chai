const assert = require('chai').assert
const index = require('../index')

const sayHelloresult = index.sayHello()
const addNumbersResult = index.addNumbers(5, 5)

describe('App', () => {
    describe('sayHello()', () => {
        it('it should return "Hello"', () => {
            assert.equal(sayHelloresult, 'Hello')
        })
    
        it('it should return type string', () => {
            assert.typeOf(sayHelloresult, 'string')
        })
    })

    describe('addNumbers()', () => {
        it('it should be above 5', () => {
            assert.isAbove(addNumbersResult, 5)
        })

        it('it should return type number', () => {
            assert.typeOf(addNumbersResult, 'number')
        })
    })
})