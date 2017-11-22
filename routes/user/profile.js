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
      res.redirect('/edit-profile')
    }
  }
}

profileRoutes.get('/edit-admin', ensureLoggedIn(), checkRoles('admin'), (req, res) => {
  User.find({ validation: false }, (err, userLists) => {
    if (err) {
      next(err);
      return;
    }
    res.render('private/admin', {users: userLists});
  });
});

profileRoutes.post('/edit-admin', ensureLoggedIn(), checkRoles('admin'), (req, res) => {
  User.update({ _id: req.body.id }, { $set: { validation: true }}, (err, profile) => {
    if (err){ return next(err); }

    return res.redirect("/edit-admin");
  });
});

profileRoutes.get('/edit-profile', ensureLoggedIn(), (req, res, next) => {
  res.render('private/edit-profile');
});

profileRoutes.post('/edit-profile', (req, res, next) => {
  let id = req.user._id;
  console.log('speciality =======>', req.body);

  const updates = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    photo: req.body.photo,
    speciality: [],
    target: [],
    orientation: [],
    role: req.body.role,
    identification: req.body.identification,
    description: req.body.description,
    website: req.body.website,
    // associate_psychologist:
    // associate_patients:
    // associate_clinics:
    role: req.body.role,
  };

  if(req.body.clinica) updates.speciality.push("clinica");
  if(req.body.pareja) updates.speciality.push("pareja");
  if(req.body.educativa) updates.speciality.push("educativa");
  if(req.body.niños) updates.target.push("niños");
  if(req.body.adolescentes) updates.target.push("adolescentes");
  if(req.body.adultos) updates.target.push("adultos");
  if(req.body.cognitivo) updates.orientation.push("cognitivo");
  if(req.body.dinamica) updates.orientation.push("dinamica");
  if(req.body.sistemica) updates.orientation.push("sistemica");

  console.log('Updates =======>', updates);

  User.findByIdAndUpdate(id, updates, (err, profile) => {
    if (err){ return next(err); }
    return res.redirect("/");
  });

  // User.findByIdAndRemove(id, (error) => {
  //   res.redirect('/');
  // });
});

  // User.findByIdAndRemove(id, (error) => {
  //   res.redirect('/');
  // });

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
