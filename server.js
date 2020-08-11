// in node we manually create the server that listens to requests from the browser

const http = require('http')

//create server takes a callback function as its argument
//the call back function takes two arguments
//those two arguments are req(request) and res (response)
const server = http.createServer(()=>{
    console.log('request made')
})

//server.listen takes a portnumber and hostname and callback function as arguments
server.listen(3000,'localhost', () =>{
    console.log('listening for requests on port 3000')
})