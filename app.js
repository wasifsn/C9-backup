var express = require("express")
var app = express();

app.get("/", function (req,res) {
    res.send("hi there welcome to my assignment");
});


app.get("/speak/:animal", function (req,res) {
 
    var animal = req.params.animal;
    var sound = "";
  
    if (animal === "dog"){
        sound = "woof woof";
            }
    else if (req.params.animal === "whale"){
          sound = "sonic";
            }
    else if (req.params.animal === "horse"){
         sound = "neigh";
            }
    else if (req.params.animal === "cat"){
          sound = "Meow";
            }
    else if (req.params.animal === "arshia"){
          sound = "bhaukna";
            }
    
    res.send("the animal is " + animal +" with the sound of "+ sound);
    
});

app.get("/repeat/:message/:times", function (req,res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    
    for( var i = 0; i <= times; i++){
        result += message + " ";
        }
    res.send(result);
});

app.get("/*", function (req,res) {
    res.send("you have entered a wrong URL");
});

app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("the server has started");

});