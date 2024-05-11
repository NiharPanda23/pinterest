const express = require('express');
const router = express.Router();
const userModel = require("./users");
const postsModel = require("./posts");
const passport = require('passport');
const localStrategy = require('passport-local');
const upload = require('./multer');
const { error } = require('console');

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("register");
});

router.get('/feed', function(req, res) {
  res.render("feed");
});

router.post('/upload', isLoggedIn, upload.single("file"), async function(req, res) {
  if (!req.file){
    return res.status(404).send('No file to upload please select a file.');
  }
  const user = await userModel.findOne({username: req.session.passport.user});
  const post = await postsModel.create({
    image: req.file.filename,
    imageText: req.body.filecaption,
    user: user._id
  });

  user.profileImage = req.file.filename;
  await user.save()
  
  if(user.posts.push(post._id)==true){
    user.save();
    res.redirect("/profile");
  }else{
    res.send(error)
  }
  
});

router.get('/login', function(req, res) {
  res.render("login", {error: (req.flash("error"))});
});

router.get('/profile', isLoggedIn, async function(req, res) {
  const user = await userModel.findOne({
    username: req.session.passport.user,
    password: req.session.passport.user.password
  }).populate("posts");
  console.log(username);
  res.render("profile", {user});
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
  .then(function(registeredUser){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash:true,
}), function(req, res) { });

router.get("/logout", function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/login")
};


module.exports = router;
