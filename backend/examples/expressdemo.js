const express = require("express");

const app =  express();

app.get("/",(req,res)=>{
    console.log(req);
    res.status(200).send("<h1>Home Page</h1>");
})
app.get("/about",(req,res)=>{
    console.log(req);
    res.status(200).send("<h1>About Page</h1>");
})
app.get("/contact",(req,res)=>{
    console.log(req);
    res.status(200).send("<h1>Contact Page</h1>");
})
app.get("*",(req,res)=>{
    res.status(404).send("<h1>Error Page</h1>")
})
app.post("/login",(req,res)=>{

})

app.listen(3000);



























// const http  = require("http");

// const server = http.createServer((req,res)=>{
//     if(req.method === "GET" && req.url === "/home"){
//         return res.end("<h1>Home Page</h1>");
//     }
//     res.end("Hello");

// });

// server.listen(3000);
