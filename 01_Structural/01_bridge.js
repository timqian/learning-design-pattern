/**
 * Def
 *      Bridge pattern is about preferring composition over inheritance.
 *      Implementation details are pushed from a hierarchy to another object with a separate hierarchy.
 */

// webpage img: https://github.com/sohamkamani/javascript-design-patterns-for-humans#-bridge

/*
Webpage interface :

constructor(theme)
getContent()
*/

class About{ 
    constructor(theme) {
        this.theme = theme
    }
    
    getContent() {
        return "About page in " + this.theme.getColor()
    }
}

class Careers{
   constructor(theme) {
       this.theme = theme
   }
   
   getContent() {
       return "Careers page in " + this.theme.getColor()
   } 
}

/*
Theme interface :

getColor()
*/

class DarkTheme{
    getColor() {
        return 'Dark Black'
    }
}
class LightTheme{
    getColor() {
        return 'Off white'
    }
}
class AquaTheme{
    getColor() {
        return 'Light blue'
    }
}

const darkTheme = new DarkTheme();
const career = new Careers(darkTheme);
const about = 
console.log(career.getContent());