const express = require('express');
const router  = express.Router();
const User = require('../../models/User');

//RUTA PARA MOSTRAR EL PERFIL DE CADA PSICOLOGO

// router.get('/p_profile', (req, res, next) => {
//   User.find({role: "clinic"},(err, usersFromDatabase) => {
//     console.log (usersFromDatabase);
//       if (err) { return next(err) }
//       res.render('p_profile', {
//         user: usersFromDatabase
//      });
//   });
// });

//RUTA A LA VISTA PARA MOSTRAR PERFIL DE 1 PSICOLOGO

//const userId = "5a140dd08e184910dd2f4512";

router.get('/p_profile', (req, res, next) => {
  const userId = req.query.id;
  User.findById(userId,(err, userFromDatabase) => {
    console.log (userFromDatabase);
      if (err) { return next(err) }
      res.render('p_profile', {user: userFromDatabase});
  });
});

  
//RUTA A LA VISTA PARA MOSTRAR PERFIL DE 1 CLINICA
//const userId2 = "5a140dd08e184910dd2f4514";

router.get('/c_profile', (req, res, next) => {
  const userId2 = req.query.id;
  User.findById(userId2,(err, userFromDatabase) => {
    console.log (userFromDatabase);
      if (err) { return next(err) }
      res.render('c_profile', {user: userFromDatabase});
  });
});



module.exports = router;
