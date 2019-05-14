var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser:true});

//POST schema

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER schema

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [
            {
                 type: mongoose.Schema.Types.ObjectId,   
                 ref: "Post"
            }
         ]
});

var User = mongoose.model("User", postSchema);
//-------------------------------
User.create({name: "bob", 
            email:"bobfletcher@gmail.com"});

Post.create( {title:"how to cook a meal pt 2",
                Content:"just follow the recipe"}, function(err, post){
                User.findOne({ name:"bob"}, function(err, foundUser){
                    
                    if(err){
                        console.log(err);
                    } else {
                        foundUser.posts.push(post._id);
                        foundUser.save(function(err, data){
                            if (err){
                                console.log(err);
                            } else {
                                console.log(data);
                            }
                        });
                    }
                });
                });
                
    User.findOne({name: "bob"}).populate("posts").exec(function (err,user){
        if (err){
            console.log(err);
        } else {
            console.log(user);
        }
    });
                