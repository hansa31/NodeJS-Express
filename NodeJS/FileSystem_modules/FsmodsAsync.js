const {readFile,writeFile} = require('fs')

//using the callback function


readFile('./conent/test1.txt','utf8',(err,result) => {      //without uft8 it will print a buffer?
    if(err){
        console.log(err);
        return
    }else{
        console.log(result);
        const first = result;
        readFile('./conent/test2.txt','utf8',(err,result) => {
            if(err){
                console.log(err)
                return
            }else{
                console.log(result);
                const second = result
                writeFile('./conent/resultAsync.txt',`Here is the result : ${first} \n ${second}`,(err,result) => {
                    if(err){
                        console.log(err);
                        return
                    }else{
                        console.log("Look at resultAsync.txt");
                    }
                })
            }
        })
    }
})


/*
//alternative way for the callback function
readFile('./conent/test1.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());           //utf8 ?
 });

*/

console.log("Hello this is Asynchronous.....");     //this line will get printed first