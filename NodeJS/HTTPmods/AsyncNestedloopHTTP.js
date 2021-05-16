const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end('Home Page...')
    }

    if(req.url == '/about'){
        //BLOCKING CODE -> this takes some time to execute
        //all the other pages gets loaded because of this process (Therfore have to use non blocking code --> Async)
        for(i = 0; i<1000 ; i++){
            for(j=0;j<1000;j++){
                console.log(`${i}  ${j}`)
            }
        }

        res.end('About page -> takes some time to load')
    }

    res.end('Error page')
})

server.listen(5000,() => {
    console.log('Server is listening on port 5000 .....')
})