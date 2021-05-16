const {readFile,writeFile} = require('fs')

//for understanding
/*
const addNum = (num1,num2) => {
    return num1+num2;
}

console.log(addNum(4,6))
*/


//USE UTIL TO SIMPLIFY THIS TASK

//getText is a function
const getText = (path) => {
    //promise is like exception handling in java ????
    return new Promise((resolve,reject) => {
        readFile(path,'utf8',(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}


const start = async() => {      //await is only valid in async functions
    // WITHOUT await -->> Promise { 'This is used for filesystem modules.' } 
    try {
        const first = await getText('./conent/test1.txt');      //waiting for the promise to be over
        const second = await getText('./conent/test2.txt');
        console.log(first)
        console.log(second);
    } catch (error) {
        console.log(error);
    }
}

start()


//syntax of promise --> our own wrapper function
/*
getText('./conent/test1.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
*/
    