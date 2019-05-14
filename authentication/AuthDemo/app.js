var express                 = require("express"),
    mongoose                = require("mongoose"),
    bodyParser              = require("body-parser"),
    passport                = require("passport"),
    User                    = require("./models/user"),
    localStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");
    
  
    mongoose.connect('mongodb://localhost:27017/auth_demo', { useNewUrlParser: true });
    var app = express();
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({extended: true}));
  
  
    app.use(require("express-session")({  // require express session and run it using three parameters
        secret: "i am the best",
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize()); //required to setup passport - initialize passport
    app.use(passport.session());  //required to setup passport  - run passport
    passport.use(new localStrategy(User.authenticate()));
    
    passport.serializeUser(User.serializeUser()); //encodes the session
    passport.deserializeUser(User.deserializeUser()); //decodes the session
//=========================================================
//=============ROUTES======================================
//=========================================================

    app.get("/", function(req,res){
        res.render('home');
    })
    
    app.get("/secret",isLoggedIn ,function(req,res){
        res.render("secret");    
    });
    
    //AUTH ROUTES
    //show register form
    
    app.get('/register', function(req, res) {
      res.render('register'); 
    });
    
    //take data from the form and handle user signup
    
    app.post('/register', function(req,res){
        req.body.username
        req.body.password
        User.register(new User({username: req.body.username}), req.body.password, function(err, user){
          if (err) {
              console.log(err);
              return res.render('register');
          } passport.authenticate('local')(req,res, function(){
                res.redirect('/secret'); 
          });
        });
    });
    
    // LOGIN ROUTES
    //render login form 
    
    app.get('/login', function(req, res) {
      res.render('login'); 
    });
    
    //Login logic
    //middleware
     app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});   
    
    //logout route
    
    app.get('/logout', function(req, res) {
      req.logout();
      res.redirect("/"); 
    });
    
    function isLoggedIn(req, res, next){
        if (req.isAuthenticated()){
            return next();
        }  res.redirect("/login")
    };
    
    app.listen(process.env.PORT, process.env.IP, function(){
        console.log("auth server connected")
    });
