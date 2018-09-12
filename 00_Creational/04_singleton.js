/**
 * Ensures that only one object of a particular class is ever created.
 */

// redux
// module pattern.
const president = (function () {
    const presidentsPrivateInformation = 'Super private'

    // private
    const name = 'Turd Sandwich'

    const getName = () => name

    return {
        getName
    }
}());

console.log(president.getName())// Outputs 'Turd Sandwich'
console.log(president.name) // Outputs undefined
console.log(president.presidentsPrivateInformation)// Outputs undefined
