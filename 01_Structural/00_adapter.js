/**
 * Definition:
 *      Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
 */
/*
Lion interface :

roar()
*/

class AfricanLion  {
    roar() {}
}

class AsianLion  {
    roar() {}
}

class Hunter {
    hunt(lion) {
        // ... some code before
        lion.roar()
        //... some code after
    }
}

// This needs to be added to the game
class WildDog {
    bark() {
        console.log('wang');
    }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter {

    constructor(dog) {
        this.dog = dog;
    }
    
    roar() {
        this.dog.bark();
    }
}

const wildDog = new WildDog();
const hunter = new Hunter();
wildDogAdapter = new WildDogAdapter(wildDog);
hunter.hunt(wildDogAdapter); // wang