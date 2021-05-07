//npm
//local dependency --> npm -i <packagename>
//global dependency --> npm install -g <packagename>

//package.json --> stores important info about project/package
//npm init **** npm init -y

//using the npm packages
const _ = require('lodash')

const item = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)

console.log(newItems);

console.log("Testing nodemon")
console.log("NICE");
