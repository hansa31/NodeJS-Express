const http = require('http')

//using event emitter API
const server = http.createServer()

//emits request event
//subcribe to it, listen for it, respond to it
server.on('request',(req, res) => {
    res.end('Welcome')
    console.log("request sent by client");
})

server.listen(5000,() => {
    console.log("Serever listening in port 5000");
})

/*
const server = http.createServer((req, res) => {
    res.end("Welcome")
})
*/