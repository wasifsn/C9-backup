const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

const catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

let Cat = mongoose.model("Cat",catSchema);

var george = new Cat({
  name: "Mrs Noris",
  age: "9",
  temperament: "grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("we ran into an error");
    }
    else{
        console.log("the saved cat is");
        console.log(cat);
    }
    
});

Cat.find({},function(err, cats){
    if(err){
    console.log("we got an ERROR!")
    }
    else{
        console.log("there are no errors!");
        console.log(cats);
    }
    
});

Cat.create({
    name:"lolo",
    age:"12",
    temperament:"susthad"
    
},function(err, cats){
    if(err){
    console.log("we got an ERROR!")
    }
    else{
        console.log("there are no errors!");
        console.log(cats);
    }
    
});