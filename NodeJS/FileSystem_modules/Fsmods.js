//Synchronuos
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./conent/test1.txt','utf8')
const second = readFileSync('./conent/test2.txt')

console.log(first + '\n' + second);

//to create a file
writeFileSync('./conent/result.txt',`Here is the result : ${first} \n ${second}`)

//to append => add the flag
writeFileSync(
    './conent/result.txt',`Here is the result : ${first} \n ${second}`,
    {flag:'a'}
    )
