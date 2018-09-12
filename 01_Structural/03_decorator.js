/**
 * Def: 
 *      Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.
 * 
 */

/**
 * TODO: To decorate: This example use new class to wrap object, but easier way will be use decorator feature of es7
 */

/*
Coffee interface:
getCost()
getDescription()
*/

class SimpleCoffee{
    getCost() {
        return 10
    }

    getDescription() {
        return 'Simple coffee'
    }
}

class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 2
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk'
    }
}

class WhipCoffee {
    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 5
    }

    getDescription() {
        return this.coffee.getDescription() + ', whip'
    }
}

let someCoffee

someCoffee = new SimpleCoffee()
console.log(someCoffee.getCost())// 10
console.log(someCoffee.getDescription())// Simple Coffee

someCoffee = new MilkCoffee(someCoffee)
console.log(someCoffee.getCost())// 12
console.log(someCoffee.getDescription())// Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee)
console.log(someCoffee.getCost())// 17
console.log(someCoffee.getDescription())// Simple Coffee, milk, whip