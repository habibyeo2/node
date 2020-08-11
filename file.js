const fs = require('fs');

//fis.readfile takes two arguments
//1. is the location of the file we reading
//2. is the class back function that we run once the file is read

fs.readFile('./docs/blog1.txt', (err, data) =>{
    if (err){
       // console.log(err)
    }
    //console.log(data.toString())
})
//fs.readFile is asynchronous
// console.log('this line of code is after fs.readfile')

fs.writeFile('./docs/blog1.txt', 'pew pew pew',()=>{
    //console.log('file was written')
})
//fs.writeFile takes three arguments
//1. the location to write the file
//2. what to write in the file
//3. a callback function to fire once written

fs.writeFile('./docs/blog2.text', 'helo again!', () =>{
    //console.log('another file was written')
    fs.readFile('./docs/blog2.text', (err,data)=>{
        //console.log(data.toString())
    })
})

//fs.mkdir allows us to make folders
// fs.mkdir('./assets', (err) =>{
//     if (err){
//         console.log(err)
//     }
//     console.log('folder created')
// })

// fs.rmdir('./assets', () =>{
//     if(err){
//         console.log(err)
//     }
//     console.log('folder deleted')
// })

if(fs.existsSync('./assets')){
    fs.rmdir('./assets', (err)=>{
    if (err){
        console.log(err)
    }
    console.log('folder deleted')
})
} else {
    fs.mkdir('./assets', (err) => {
    if (err){
        console.log(err)
    }
    console.log('folder created')
})
}