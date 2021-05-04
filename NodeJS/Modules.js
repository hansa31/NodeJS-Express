
const names = require('./moduleUse')
const sayHi = require('./sayHi')

console.log(names)      //prints the object names => { name1: 'John', name2: 'Peter' }
console.log(sayHi)

sayHi("Susan")
sayHi(names.name1)
sayHi(names.name2)

//from the exports alternative
console.log('************************************************')
const alternative = require('./exportsAlternative')
console.log(alternative)

