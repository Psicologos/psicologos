const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Comment = require('../../models/Comment');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/p_profile/:id',ensureLoggedIn(), (req, res, next) => {
  User.findById(req.params.id, (err, userFromDatabase) => {
    if (err) {
      return next(err);
    }
    res.render('p_profile', {
      psychologist:userFromDatabase,
      userLogged:req.user._id
    });
  });
});
// GUARDAR LOS COMENTARIOS EN LA BASE DE DATOS
router.post('/p_profile',ensureLoggedIn(), (req, res, next) => {
    const commentInfo = {
      comment: req.body.description,
      author_id: req.body.idUserLogged,
      receiver_id: req.body.idUser
      //FALTA INCLUIR EL rating CON LAS ESTRELLITAS
    };
   const theComment = new Comment(commentInfo);
    theComment.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect(`/p_profile/${req.body.idUser}`);
    });
  });
router.get('/c_profile/:id', ensureLoggedIn(), (req, res, next) => {
  User.findById(req.params.id, (err, clinicFromDatabase) => {
    if (err) {
      return next(err);
    }
    res.render('c_profile', {
      clinic: clinicFromDatabase
    });
  });
});
module.exports = router;
