const http = require('http')

//creating the serever
const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end('Welcome to our home page')
    }if(req.url === "/about"){
        res.end("This is the about page")
    }else{
        res.end(`
        <h1>The page is missing </h1>
        <p>We can't find what you are looking for </p>
        <a href = "/"> back home</a>`)
    }
    
})

server.listen(3000)