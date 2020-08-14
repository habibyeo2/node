const express = require('express');
const {server} = require('http');
const { create } = require('domain');

//restart an express path by invoking it into a constant/variable
const app = express();

//listening to view engine
app.set("view engine", "ejs")
//takes two arguments that are strings
//1. is what we are setting
//2. what we are setting the first argument to
//listen for requests
app.listen(3000);

//app.get takes two arguments
//1. what URL we're listening for
//2. what callback function to fire when we get the request
app.get('/',(req, res)=>{
    //use the res object and send method to display some html
    // res.sendFile("./views/index.html", {root:__dirname})
    //res.sendFile takes two arguments
    //1. the file we want to send
    //2. what we set as the new root directory

    res.render('index', {title: 'home'})
    //res.render takes an argument of a string that is the file to render
    // ejs automatically knows to look in your view folder

    // res.render takes a second optional argument that is an boject
    // that objects property alue pairs are passed to the ejs file as variales and their values.
})

app.get('/about', (req,res) =>{
    // res.sendFile("./views/about.html", {root:__dirname})
    res.render('about', {title: About})
})

// app.get('/about-us', (req, res)=>{
//     res.redirect('/about')
// })

app.get("/blogs/create", (req,res)=>{
    res.render('create', {title: create})
})
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname})
    res.status(404).render("404")
})