const { log } = require("console");
const express  =  require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// app.get("/",(req,res)=>{
//     res.json([{fullName:"Aman Saini"}]);
// })

// getting information out from the request
// query parameter
app.get("/student",(req,res)=>{
    console.log(req.query);
    res.send("data");

});
// routing parameters
app.get("/user/:id",(req,res)=>{
    console.log(req.params);

    res.send(`hello user ${req.params.id}`);
})

// request header

app.get("/he",(req,res)=>{
    console.log(req.headers);
    res.header({
        name:"rohan"
    })
    res.send("header received");
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("body received");
})

app.listen(3000,()=>{
    console.log("litening on port 3000");
});
