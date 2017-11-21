const express = require('express');
const router  = express.Router();
const User = require('../models/user');

router.get('/', function(req, res, next) {
  User.find()
    .then(result => {
      console.log(result)
      res.render('/', {result})
    })
});

module.exports = router;
