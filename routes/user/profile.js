const express = require('express');
const profileRoutes = express.Router();
const User = require('../../models/User');
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');


function checkRoles(role) {
  return function(req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      console.log("ENTRO EN MIDDLE TRUE");
      return next();
    } else {
      res.redirect('/edit-profile');
    }
  };
}

profileRoutes.get('/edit-admin', ensureLoggedIn(), checkRoles('admin'), (req, res) => {
  User.find({
    validation: false
  }, (err, userLists) => {
    if (err) {
      next(err);
      return;
    }
    res.render('private/admin', {
      users: userLists
    });
  });
});

profileRoutes.post('/edit-admin', ensureLoggedIn(), checkRoles('admin'), (req, res) => {
  User.update({
    _id: req.body.id
  }, {
    $set: {
      validation: true
    }
  }, (err, profile) => {
    if (err) {
      return next(err);
    }

    return res.redirect("/edit-admin");
  });
});

profileRoutes.get('/edit-profile', ensureLoggedIn(), (req, res, next) => {
  res.render('private/edit-profile');
});

profileRoutes.post('/edit-profile', (req, res, next) => {
  let id = req.user._id;
  console.log('speciality =======>', req.body);

  const {
    username,
    name,
    email,
    phone,
    address,
    city,
    photo,
    role,
    identification,
    description,
    website,
  } = req.body;

  const updates = {
    username,email,name,phone,address,city,photo,role,identification,description,website,
    speciality: [],
    target: [],
    orientation: [],
    associate_clinics: [],
  };

  if (clinica) updates.speciality.push("clinica");
  if (pareja) updates.speciality.push("pareja");
  if (educativa) updates.speciality.push("educativa");
  if (niños) updates.target.push("niños");
  if (adolescentes) updates.target.push("adolescentes");
  if (adultos) updates.target.push("adultos");
  if (cognitivo) updates.orientation.push("cognitivo");
  if (dinamica) updates.orientation.push("dinamica");
  if (sistemica) updates.orientation.push("sistemica");

  console.log('Updates =======>', updates);

  User.findByIdAndUpdate(id, updates, (err, profile) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/");
  });
});

profileRoutes.get('/psychologists', (req, res, next) => {
  console.log(req.user);
  User.find({
    role: "psychologist"
  }, function(err, users) {
    res.render('private/psychologists', {
      users: users,
      user: req.user
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
