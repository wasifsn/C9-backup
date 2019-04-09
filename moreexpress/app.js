var express = require("express");
var app = express();
const ejsLint = require('ejs-lint');
app.use(express.static("public"));
app.set("view engine","ejs")

app.get("/", function(req, res){
   res.render("home");
});

app.get("/lol/:thing", function(req,res){
   var thing = req.params.thing;
   res.render("love", { thingvar: thing});
   
});


app.get("/posts", function(req,res){
   var posts = [
         {title: "post 1", author: "susy"},
         {title: "my bunny", author: "lalu"},
         {title: "pomsky love!!", author: "colt"},
      ];
   
   res.render("posts", { posts: posts});
   
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("the server has started");
});