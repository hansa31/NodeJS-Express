const {createReadStream} = require('fs')    //see the docs for more info

const stream = createReadStream('./content/big.txt')

stream.on('data',(result) => {      //reading data in 64 kB chunks
    console.log(result);
})

//highWaterMark - control size
//const stream = createReadStream('./content/big.txt',{highWaterMark: 90000}) --> 90 kB
//const stream = createReadStream('./content/big.txt',{encoding: 'utf8'})  --> hello world 1....

//for erros
stream.on('error', (err) => {
    console.log(err);
})