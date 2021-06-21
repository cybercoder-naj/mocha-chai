module.exports = {
    sayHello: () => {
        return 'Hello'
    },
    addNumbers: (a, b) => {
        return a + b
    }
}

new Promise((resolve, reject) => {
    reject('Secant to a line');
})