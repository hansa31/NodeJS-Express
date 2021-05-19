const EventEmitter = require('events')

const customEmitter = new EventEmitter()    //creating an instance 


//order matters
customEmitter.on('response',() => {         //on => listen for an event
    console.log(`Data received`);
})    //'response' is the name of the event

customEmitter.on('response',() => {         //on => listen for an event
    console.log(`Data received 2`);
})    //'response' is the name of the event


customEmitter.emit('response')   //emiting the respond event ie -> what ever in the call back function

//giving args into on(for listning)
customEmitter.on('response2',(name, id) => {
    console.log(`data received user ${name} with id:${id}`);
})

customEmitter.emit('response2','john',5)