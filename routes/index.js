var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postsModel = require("./post");
const passport = require('passport');
const localStrategy = require('passport-local');

passport.authenticate(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/register", function(req, res) {
  // const userData = new userModel.create({
  //   username: req.body.username,
  //   email: req.body.email,             /* Elaborated code for register new user*/
  //   fullName: req.body.fullname
  // });
  const { username, email, fullname } = req.body;
  const userData = new userModel.create({username, email, fullname }); /* Short code for register new user*/

  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
});

router.post("/login", function(req, res) {
  
});


module.exports = router;
