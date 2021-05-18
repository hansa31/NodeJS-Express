//to demonstrate callbacks

console.log("User 1 made a request");
setTimeout(() => {
    console.log("Another way **** Queried the database and delivered the data in 5 seconds");
},5000)

console.log("User 2 made a request");
setTimeout(callback,5000)

console.log("User 3 made a request");
setTimeout(callback,5000)

function callback(){
    console.log("Queried the database and delivered the data in 5 seconds");
}

