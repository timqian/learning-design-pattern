/**
 * Definition:
 *      The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes
 * When to use?
 *      When there are interrelated dependencies with not-that-simple creation logic involved
 */

/*
Door interface :

getDescription()
*/

class WoodenDoor {
    getDescription() {
        console.log('I am a wooden door')
    }
}

class IronDoor {
    getDescription() {
        console.log('I am an iron door')
    }
}

/*
DoorFittingExpert interface :

getDescription()
*/

class Welder {
    getDescription() {
        console.log('I can only fit iron doors')
    }
}

class Carpenter {
    getDescription() {
        console.log('I can only fit wooden doors')
    }
}

/*
DoorFactory interface :

makeDoor()
makeFittingExpert()
*/

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory {
    makeDoor(){
        return new WoodenDoor()
    }

    makeFittingExpert() {
        return new Carpenter()
    }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory {
    makeDoor(){
        return new IronDoor()
    }

    makeFittingExpert() {
        return new Welder()
    }
}

const woodenDoor = new WoodenDoorFactory();
const door = woodenDoor.makeDoor();
const expert = woodenDoor.makeFittingExpert();
door.getDescription();
expert.getDescription();

const ironFactory = new IronDoorFactory();
const door2 = ironFactory.makeDoor();
const expert2 = ironFactory.makeFittingExpert();
door2.getDescription();
expert2.getDescription();