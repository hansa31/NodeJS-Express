const {writeFileSync} = require('fs')

for(i=0;i<10000;i++){
    writeFileSync('./content/big.txt',`hello world ${i}\n`, {flag: 'a'})
}