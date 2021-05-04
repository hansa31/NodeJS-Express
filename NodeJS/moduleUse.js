//local
const secret = "TOP SECRET"

//share
const name1 = "John"
const name2 = 'Peter'
//modules.exports.numArray = [0,1,2,3,4,5]

//console.log(module)     //to demonstrate exports in module object

module.exports = {name1,name2}      //objects to be exported from this module
//console.log(module.exports) 

console.log('In moduleUse.js')

