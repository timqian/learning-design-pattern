/*
Door

getWidth()
getHeight()

*/

class WoodenDoor {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getWidth() {
        return this.width
    }

    getHeight() {
        return this.height
    }
}

const door = new WoodenDoor(100, 200);

console.log(door.getHeight());
console.log(door.width);

const DoorFactory = {
    makeDoor: (width, height) => new WoodenDoor(width, height)
}

const door2 = DoorFactory.makeDoor(10, 20);

console.log(door2.getHeight());