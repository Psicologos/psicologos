const express = require('express');
const router  = express.Router();
const User = require('../models/User');

/* GET home page. */
router.get('/', (req, res, next) => {
   User.find({},(err, usersFromDatabase) => {
     if (err) { return next(err); }
     res.render('index', {
       users: usersFromDatabase
     });
   });
 });

module.exports = router;
