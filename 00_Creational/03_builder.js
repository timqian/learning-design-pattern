/**
 * Definition
 *      The builder pattern is an object creation software design pattern
 *      with the intentions of finding a solution to the telescoping constructor anti-pattern.
 */
class Burger {
    constructor(builder) {
        this.size = builder.size
        this.cheeze = builder.cheeze || false
        this.pepperoni = builder.pepperoni || false
        this.lettuce = builder.lettuce || false
        this.tomato = builder.tomato || false
    }
}

class BurgerBuilder {

    constructor(size) {
        this.size = size
    }

    addPepperoni() {
        this.pepperoni = true
        return this
    }

    addLettuce() {
        this.lettuce = true
        return this
    }

    addCheeze() {
        this.cheeze = true
        return this
    }

    addTomato() {
        this.tomato = true
        return this
    }

    build() {
        return new Burger(this)
    }
}

const buger = (new BurgerBuilder(10))
    .addPepperoni()
    .addLettuce()
    .addTomato()

console.log('other steps');

buger.build()

console.log(buger);

/**
 * if did not need steps to build
 */
const buger2 = new Burger({
    size : 14,
    pepperoni : true,
    cheeze : false,
    lettuce : true,
    tomato : true
});

console.log(buger2);