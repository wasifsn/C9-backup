var mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser:true});

//POST schema

var postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

var Post = mongoose.model("Post", postSchema);

//USER schema

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

//=--------------------------------------=

// var newUser = new User({
//     name: "Hermione",
//     email: "hermione@hogwarts.edu",
 
// });

//  newUser.posts.push( {
//         title:"things that i hate",
//         content: "voldemort. voldemort. voldemort."
//     });
    
// newUser.save(function (err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

User.findOne({name:"Hermione"}, function(err, user){
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title:"to do list",
            content: "go to potions class"
        });
    }
    
    user.save(function(err, user){
        if (err){
            console.log(err)
        } else {
            console.log(user)
        }
    });
});

// var newPost = new Post({
//   title:"how to be succeful",
//   content: "true determination and never give up, thats all!! "
// });

// newPost.save(function(err, post){
//      if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });