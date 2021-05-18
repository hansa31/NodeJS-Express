const EventEmitter = require('events')

const customEmitter = new EventEmitter()    //creating an instance 

customEmitter.on('response',() => {         //on => listen for an event
    console.log(`Data received`);
})    //'response' is the name of the event

customEmitter.emit('response')   //emiting the respond event ie -> what ever in the call back function