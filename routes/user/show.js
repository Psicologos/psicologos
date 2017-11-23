const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Comment = require('../../models/Comment');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

// MUESTRA EL PERFIL INDIVIDUAL DE CADA PSICOLOGO
router.get('/p_profile/:id',ensureLoggedIn(), (req, res, next) => {
//TOMA PROMESA QUE ME HE MARCADO!!! CABRONES!!
var a = User.findById(req.params.id);
var b = Comment.find({"receiver_id":req.params.id}).populate("author_id");
Promise.all([a,b]).then(values => {
  console.log(values[1]);
  res.render('p_profile', {
    psychologist:values[0],
    userLogged:req.user._id,
    psychologistComments: values[1]
  });
});

});

// GUARDAR LOS COMENTARIOS DE LOS PSICOLOGOS EN LA BASE DE DATOS
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


// MUESTRA EL PERFIL INDIVIDUAL DE CADA CLINICA
router.get('/c_profile/:id',ensureLoggedIn(), (req, res, next) => {
//TOMA PROMESA QUE ME HE MARCADO CON FLOKY!!! CABRONES!!
var c = User.findById(req.params.id).populate("psychologist");
var d = Comment.find({"receiver_id":req.params.id}).populate("author_id");
Promise.all([c,d]).then(values => {
  res.render('c_profile', {
    clinic: values[0],
    userLogged:req.user._id,
    clinicComments: values[1]
  });
});
});

// GUARDAR LOS COMENTARIOS EN LA BASE DE DATOS
router.post('/c_profile',ensureLoggedIn(), (req, res, next) => {
    const commentClinic = {
      comment: req.body.description,
      author_id: req.body.idUserLogged,
      receiver_id: req.body.idUser
      //FALTA INCLUIR EL rating CON LAS ESTRELLITAS
    };

   const theCommentClinic = new Comment(commentClinic);
    theCommentClinic.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect(`/c_profile/${req.body.idUser}`);
    });
  });

module.exports = router;
