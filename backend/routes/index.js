var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postsModel = require("./posts");
const passport = require('passport');
const localStrategy = require('passport-local');

passport.authenticate(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("login");
});

router.get('/profile', isLoggedIn, function(req, res) {
   res.send("Welcome to profile");
});

router.post("/register", function(req, res) {
  // const userData = new userModel.create({
  //   username: req.body.username,
  //   email: req.body.email,             /* Elaborated code for register new user*/
  //   fullName: req.body.fullname
  // });
  const { username, email, fullname } = req.body;
  const userData = new userModel({username, email, fullname }); /* Short code for register new user*/

  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.send("Welcome to the profile");
    })
  })
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req, res) {
  
});

router.get("/logout", function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/")
}


module.exports = router;
