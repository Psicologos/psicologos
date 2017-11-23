require('dotenv').config();

const mongoose = require('mongoose');

const dbURL = process.env.DBURL;
mongoose.connect(dbURL, {
  useMongoClient: true
});
const User = require('../models/User');

//Password
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
var encryptedPass = bcrypt.hashSync(password, salt);

const users = [{
    username: 'gema',
    name: 'Gema',
    email: 'gema@gmail.com',
    password: encryptedPass,
    address: 'Chamberí, 6',
    city: 'Madrid',
    identification: 'ad000202020220',
    rate: 20,
    role: 'admin',
  },
  {
    username: 'manu',
    name: 'Manu',
    email: 'manu@gmail.com',
    password: encryptedPass,
    address: 'Lavapies, 10',
    city: 'Sevilla',
    identification: 'ad000202020221',
    rate: 30,
    role: 'psychologist',
  },
  {
    username: 'pepe',
    name: 'Pepe',
    email: 'pepe@gmail.com',
    password: encryptedPass,
    address: 'Picos de Artilleros, 10',
    city: 'Barcelona',
    identification: 'ad000202020222',
    rate: 20,
    role: 'psychologist',
  },
  {
    username: 'clinicacibeles',
    name: 'Clínica Cibeles',
    email: 'cibeles@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
  },
  {
    username: 'clinicaandreu',
    name: 'Clínica Andreu',
    email: 'andreu@gmail.com',
    password: encryptedPass,
    address: 'Avenida Andalucía, 10',
    city: 'Cordoba',
    identification: 'ad000202020224',
    rate: 30,
    role: 'clinic',
    psychologist:[]
  },
  {
    username: 'antonio',
    name: 'Antonio',
    email: 'antonio@gmail.com',
    password: encryptedPass,
    address: 'Hermosilla, 81',
    city: 'Madrid',
    role: 'patient'
  },
  {
    username: 'lola',
    name: 'Lola',
    email: 'lola@gmail.com',
    password: encryptedPass,
    address: 'Alcalá, 102',
    city: 'Madrid',
    role: 'patient'
  }
];

User.collection.drop(); //Elimina la colección asociada al modelo. Para que cada vez que lo ejecute, no lo vuelva a crear.

//importante cerrar la conexión con mongoose
User.create(users, (err, docs) => {
  //le pasamos como primer parámetro un array de objetos
  if (err) {
    throw err;
  }

  docs.forEach((user) => {
    console.log(user.name);
  });

  //importante cerrar la conexión con mongoose
  mongoose.connection.close();
});
