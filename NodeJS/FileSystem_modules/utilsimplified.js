
const { readFile, writeFile } = require('fs').promises

const start = async() => {
    try {
        const first = await readFile('./conent/test1.txt','utf8')
        const second = await readFile('./conent/test2.txt','utf8')
        //to write these -> await ?
        await writeFile(
            './conent/result-util-simplified-important.txt',
            `THIS IS AWESOME : ${first} / ${second}`
        )
        console.log(first)
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start()