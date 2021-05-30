const express = require('express');
const app = express();
app.use(express.static("stat"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\login.html");
})
app.post("/game.html",function(req,res){
    res.sendFile(__dirname+"\\login.html");
})
app.post("/",function(req,res){
    res.sendFile(__dirname+"\\game.html");
})
app.listen(8080);