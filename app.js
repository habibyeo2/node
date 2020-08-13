const express = require('express');
const {server} = require('http');

//restart an express path by invoking it into a constant/variable
const app = express();


//listen for requests
app.listen(3000);

//app.get takes two arguments
//1. what URL we're listening for
//2. what callback function to fire when we get the request
app.get('/',(req, res)=>{
    //use the res object and send method to display some html
    res.sendFile("./views/index.html", {root:__dirname})
    //res.sendFile takes two arguments
    //1. the file we want to send
    //2. what we set as the new root directory
})

app.get('/about', (req,res) =>{
    res.sendFile("./views/about.html", {root:__dirname})
})

app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})