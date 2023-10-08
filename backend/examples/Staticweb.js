const express  =  require("express");
const path = require("path");

const app = express();
console.log(__dirname);

// express methods
// get
// post
// listen
// use

app.use(express.static("./staticweb"))

// app.get("/static",(req,res)=>{
//     res.sendFile(path.join(__dirname,"/staticweb/index.html"));
// });

// app.get("/index.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,"/staticweb/index.css"));
// })

app.listen(3000,()=>{
    console.log("litening on port 3000");
});
