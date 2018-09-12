/**
 * Def:
 *      In object-oriented programming, the command pattern is a behavioral design pattern 
 *      in which an object is used to encapsulate all information needed to perform an action 
 *      or trigger an event at a later time. This information includes the method name, the 
 *      object that owns the method and values for the method parameters.
 * 
 * Meaning:
 *      Allows you to encapsulate actions in objects. The key idea behind this pattern is to 
 *      provide the means to decouple client from receiver.
 */

// Receiver
class Bulb {
    turnOn() {
        console.log('Bulb has been lit')
    }

    turnOff() {
        console.log('Darkness!')
    }
}

/*
Command interface :

    execute()
    undo()
    redo()
*/

// Command
class TurnOnCommand {
    constructor(bulb) {
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOn()
    }

    undo() {
        this.bulb.turnOff()
    }

    redo() {
        this.execute()
    }
}

class TurnOffCommand {
    constructor(bulb) {
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOff()
    }

    undo() {
        this.bulb.turnOn()
    }

    redo() {
        this.execute()
    }
}

// Invoker
class RemoteControl {
    submit(command) {
        command.execute()
    }
}

// receiver
const bulb = new Bulb()

// command
const turnOn = new TurnOnCommand(bulb)
const turnOff = new TurnOffCommand(bulb)

// invoker
const remote = new RemoteControl()

// client invoke invoker 
remote.submit(turnOn) // Bulb has been lit!
remote.submit(turnOff) // Darkness!