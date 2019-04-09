var express = require("express");
var app = express();

// define route
app.get("/",function(req,res){
    res.send("hi there");
   console.log("home page"); 
});

app.get("/bye",function(req,res){
    res.send("Goodbye");
   console.log("Goodbye"); 
});


app.get("/come on",function(req,res){
    res.send("Lets go");
   console.log("Lets go"); 
});

// tell express to listen for requests 

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("the server have started"); 
});