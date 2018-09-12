// creational pattern 
/**
 * What:
 * It provides a way to delegate the instantiation logic to child classes.
 * 
 * When to use?
 * Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime.
 * Or putting it in other words, when the client doesn't know what exact sub-class it might need.
 */

// React make use of it

/*
Interviewer interface

askQuestions()
*/

class Developer {
    askQuestions() {
        console.log('Asking about design patterns!')
    }
}

class CommunityExecutive {
    askQuestions() {
        console.log('Asking about community building')
    }
}

class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer()
        interviewer.askQuestions()
    }
}

class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive()
    }
}

class SalesManager extends HiringManager {
    // Question: no hint here, but react has hint, how did react implement that?
    makeInterviewer() {
        
    }
}

const devManager = new DevelopmentManager()
devManager.takeInterview() // Output: Asking about design patterns

const marketingManager = new MarketingManager()
marketingManager.takeInterview() // Output: Asking about community buildng.