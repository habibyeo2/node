// in node we manually create the server that listens to requests from the browser

const http = require('http');
const fs = require('fs');
const _= require("lodash");

//create server takes a callback function as its argument
//the call back function takes two arguments
//those two arguments are req(request) and res (response)
const server = http.createServer((req,res)=>{
    // req and res are both objects for the request and response
    // console.log(req.url,req.method);

    // const num = _.random(0,20)
    // console.log(num)

    const greet = _.once(() =>{
        console.log("hello")
    })
    greet();
    greet();
    res.setHeader('Content-type', 'text-html')

    //use a switch to set our url/path
    let path ='./views/';
    switch (req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
           path += 'about.html'
           res.statusCode = 301;
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;

    }
    fs.readFile(path,(err,data)=>{
        if (err){
            console.log(err);
            res.end()

        }else{
            // res.write(data)
            //this passes the index.html into our write method
            res.end(data)
        }
    })
})

//server.listen takes a portnumber and hostname and callback function as arguments
server.listen(3000,'localhost', () =>{
    console.log('listening for requests on port 3000')
})