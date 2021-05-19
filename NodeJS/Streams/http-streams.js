var http = require('http')
var fs = require('fs')

http
    .createServer(function(req,res) {
        //const text = fs.readFileSync('path')
        //res.end(text)
        const filestream = fs.createReadStream('./content/big.txt','utf8')
        filestream.on('open',() => {
            filestream.pipe(res)       //push into readstream to writestream
        })
        filestream.on('error',(err) => {
            res.end(err)
        })
    })
    .listen(5000)

//see the response headers in browser --> it's chunked