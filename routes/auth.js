// This route file will have all the routes related to user registration and authentication.

// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const router = express.Router();
const bcryptSalt = 10;
const passport = require("passport");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/signup', ensureLoggedOut(), (req, res, next) => {
  res.render('auth/signup', {
    errorMessage: ''
  });
});

router.post('/signup', ensureLoggedOut(), (req, res, next) => {
  const username = req.body.username;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const address = req.body.address;
  const city = req.body.city;
  const role = req.body.role;


  if (email === '' || password === '') {
    res.render('auth/signup', {
      errorMessage: 'Enter both email and password to sign up.'
    });
    return;
  }

  User.findOne({ email: email }, '_id', (err, existingUser) => {
    if (err) {
      next(err);
      return;
    }

    if (existingUser !== null) {
      res.render('auth/signup', {
        errorMessage: `The email ${email} is already in use.`
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPass = bcrypt.hashSync(password, salt);

    const userSubmission = {
      username: username,
      name: name,
      email: email,
      password: hashedPass,
      address: address,
      city: city,
      role: role
    };

    const newUser = new User(userSubmission);

    newUser.save((err) => {
      if (err) {
        res.render('auth/signup', {
          errorMessage: 'Something went wrong. Try again later.'
        });
        return;
      }
      res.redirect('/login');
    });
  });
});

//login
router.get("/login", ensureLoggedOut(), (req, res, next) => {
  res.render("auth/login", {
  errorMessage: ''
  });
});

router.post("/login", ensureLoggedOut(), passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

//logout
router.get("/logout", ensureLoggedIn(), (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
