const {readFile,writeFile} = require('fs')  //.promises --> shown in utilsimplified.js

//util simplifies the work done in promise.js
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFilePromise('./conent/test1.txt','utf8')
        const second = await readFilePromise('./conent/test2.txt','utf8')
        //to write these -> await ?
        await writeFilePromise(
            './conent/result-util-important.txt',
            `THIS IS AWESOME : ${first} / ${second}`
        )
        console.log(first)
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start()