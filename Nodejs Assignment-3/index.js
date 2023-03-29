//importing modules
const fs = require('fs')
const http = require('http');

// creating a .html file
let name="Poonam"
fs.writeFile('index.html',`<h1>Hellow World </h1>
<p>This is ${name}...</p>`,(error)=>{
    console.log(error);
})

//creating http server and listen on port 5000
http.createServer((req,res)=>{
    //read file(index.html)
   fs.readFile("index.html",(error,data)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(data);
   })   
}).listen(5000)
   

