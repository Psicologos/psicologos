const express = require('express');
const profileRoutes = express.Router();
const User = require('../../models/User');
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

profileRoutes.get('/edit-profile', ensureLoggedIn(), (req, res, next) => {
  res.render('private/edit-profile');
});

// profile.get('/:id', (req, res, next) => {
//   User.findById(req.params.id, (err, user) => {
//     if (err) { 
//       return next(err);
//     };
//     if ((typeof(req.session.currentUser)) !== 'undefined' && req.session.currentUser.username == user.username) {
//       // if its same show private page
//       user['public'] = 0;
//       res.render('private/edit-profile', user);
//     } else {
//       res.render('profile/show', {
//         name: user.name,
//         jobTitle: user.jobTitle,
//         imageUrl: user.imageUrl,
//         company: user.company,
//         public: 1
//       });
//
//     };
//   });
// });

profileRoutes.post('/edit-profile', (req, res, next) => {
  let id = req.user._id;
  console.log('ID =======>', id);

  const updates = {
    name: req.body.name,
    username: req.body.username,
  };
  console.log('Updates =======>', updates);

  User.findByIdAndUpdate(id, updates, (err, profile) => {
    if (err){ return next(err); }

    return res.redirect("/");
  });
});

profileRoutes.get('/psychologists', (req, res, next) => {
  User.find({
    role: "psychologist"
  }, function(err, users) {
    res.render('private/psychologists', {
      users: users
    });
  });
});

profileRoutes.post('/psychologists', ensureLoggedIn(), (req, res, next) => {
  console.log(req.body.id);
  User.update({
    _id: req.user._id
  }, {
    $push: {
      "associate_psychologist": req.body.id
    }
  }, (error, user) => {
    res.render('private/edit-profile');
  });
});

profileRoutes.get('/clinics', (req, res, next) => {
  User.find({
    role: "clinic"
  }, function(err, users) {
    res.render('private/clinics', {
      users: users
    });
  });
});



module.exports = profileRoutes;
