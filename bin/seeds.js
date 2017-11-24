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
    username: 'abraham',
    name: 'Abraham',
    email: 'abraham@gmail.com',
    password: encryptedPass,
    address: 'Lavapies, 10',
    city: 'Sevilla',
    identification: 'ad000202020221',
    rate: 30,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517720/Abraham-Castro-01_zw82vd.jpg",
    validation: true
  },
  {
    username: 'alberto',
    name: 'Alberto',
    email: 'alberto@gmail.com',
    password: encryptedPass,
    address: 'Lavapies, 10',
    city: 'Sevilla',
    identification: 'ad000202020221',
    rate: 30,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517795/Alberto-Campos-01_fyb9u7.jpg",
    validation: true
  },
  {
    username: 'angel',
    name: 'Angel',
    email: 'angel@gmail.com',
    password: encryptedPass,
    address: 'Lavapies, 10',
    city: 'Sevilla',
    identification: 'ad000202020221',
    rate: 30,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517772/Angel-Sideroey-01_ydbgka.jpg",
    validation: true
  },
  {
    username: 'fran',
    name: 'Fran',
    email: 'fran@gmail.com',
    password: encryptedPass,
    address: 'Picos de Artilleros, 10',
    city: 'Barcelona',
    identification: 'ad000202020222',
    rate: 20,
    role: 'psychologist',
    photo: "http://res.cloudinary.com/dmhb6ozxo/image/upload/q_23/v1511517812/Fran-Romero-01_pfw2i7.jpg",
    validation: true
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
    photo: "http://aimacpc.es/wp-content/uploads/Sala-para-ninos-en-Aima-psicologia-clinica-en-santiago.jpg",
    validation: true
  },
  {
    username: 'clinicaperez',
    name: 'Clínica Perez',
    email: 'perez@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
    photo: "http://www.qicenter.es/wp-content/uploads/2015/02/clinica-fisioterapia-malaga-qicenter.png",
    validation: true
  },
  {
    username: 'juan',
    name: 'Juan',
    email: 'juan@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'psychologist',
    photo: "https://res.cloudinary.com/dmhb6ozxo/image/upload/q_36/t_media_lib_thumb/v1511517833/Juan-Vallejo-Najera-02_jwsfue.jpg",
  },
  {
    username: 'clinicapepe',
    name: 'Clínica Pepe',
    email: 'peperepe@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
    photo: "https://imagenes.paginasamarillas.es/centro-especializado-de-psicologia-clinica/fotos/318/204/42N/004/gfoto01.jpg",
    validation: true
  },
  {
    username: 'clinicalolita',
    name: 'Clinica Lolita',
    email: 'peperepe@gmail.com',
    password: encryptedPass,
    address: 'Paseo de la Castellana, 10, Madrid',
    city: 'Valencia',
    identification: 'ad000202020223',
    rate: 30,
    role: 'clinic',
    photo: "https://imagenes.paginasamarillas.es/centro-especializado-de-psicologia-clinica/fotos/318/204/42N/004/gfoto01.jpg",
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
    psychologist:[],
    photo: "https://s-media-cache-ak0.pinimg.com/originals/ff/c5/9c/ffc59c7ddf820cf29553bacde1028811.jpg",
    validation: true
  },
  {
    username: 'antonio',
    name: 'Antonio',
    email: 'antonio@gmail.com',
    password: encryptedPass,
    address: 'Hermosilla, 81',
    city: 'Madrid',
    role: 'patient',
    photo: "",
  },
  {
    username: 'lola',
    name: 'Lola',
    email: 'lola@gmail.com',
    password: encryptedPass,
    address: 'Alcalá, 102',
    city: 'Madrid',
    role: 'patient',
    photo: "",
  }
];

// const users = [{
//   username:"psicologo0",
//   name: "Cayetana Hurtado de Mendoza",
//   email: "info@ironhack.com",
//   password: encryptedPass,
//   phone: 609765750,
//   address: "Calle Narvaez 1, 2T, 28004",
//   city: "Madrid",
//   photo: " ",
//   speciality: ["Clinica", "Parejas", "Educativa"],
//   target: ["Niños", "Adolescentes", "Adultos"],
//   orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//   validation: true,
//   identification: "A-26175340" ,
//   description: "Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore."
// ,
//   rate: 50,
//   website: "www.ironhack.com",
//   role:'psychologist',
// },
// {
//   username:"psicologo1",
//   name: "Yaiza TA",
//   email: "info@ironhack.com" ,
//   password: encryptedPass,
//   phone: 609765751,
//   address: "Calle Alcala 1, 2T, 28004",
//   city: "Madrid",
//   photo: "",
//   speciality: ["Clinica", "Parejas", "Educativa"],
//   target: ["Niños", "Adolescentes", "Adultos"],
//   orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//   validation: true,
//   identification: "A-26175341" ,
//   description:"Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo." ,
//   rate: 50,
//   website: "www.ironhack.com",
//   role:'psychologist',
// },
// {
//   username:"psicologo2",
//   name: "Manu del Pino TA",
//   email: "info@ironhack.com" ,
//   password: encryptedPass,
//   phone: 609765750,
//   address: "Calle Narvaez 1, 2T, 28004",
//   city: "Madrid",
//   photo: "",
//   speciality: ["Clinica", "Parejas", "Educativa"],
//   target: ["Niños", "Adolescentes", "Adultos"],
//   orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//   validation: true,
//   identification: "A-26175340" ,
//   description: "Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Que dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.",
//   rate: 50,
//   website: "www.ironhack.com",
//   role:'psychologist',
// },
// {
//   username:"psicologo3",
//   name: "Perros Malos TA",
//   email: "info@ironhack.com" ,
//   password: encryptedPass,
//   phone: 609765750,
//   address: "Calle Serrano 1, 2T, 28003"
//   city: "Madrid",
//   photo: ,
//   speciality: ["Clinica", "Parejas", "Educativa"],
//   target: ["Niños", "Adolescentes", "Adultos"],
//   orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//   validation: true,
//   identification: "A-26175340" ,
//   description: “Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.
// ”,
//   rate: 50,
//   website: "www.ironhack.com",
//   role:'psychologist',
// },
//   {
//     username:"psicologo4",
//     name: "Victor Gutierrez TA",
//     email: "info@ironhack.com" ,
//     password: encryptedPass,
//     phone: 609765750,
//     address: "Calle Bolivia 17, 4F, 28005"
//     city: "Madrid",
//     photo: ,
//     speciality: ["Clinica", "Parejas", "Educativa"],
//     target: ["Niños", "Adolescentes", "Adultos"],
//     orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//     validation: true,
//     identification: "A-26175344" ,
//     description:” Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.
// ” ,
//     rate: 50,
//     website: "www.ironhack.com",
//     role:'psychologist',
//   },
//     {
//       username:"psicologo5",
//       name: "Papu Arza",
//       email: "info@ironhack.com" ,
//       password: encryptedPass,
//       phone: 609765750,
//       address: "Calle Jorge Juan 10, 3U, 28001"
//       city: "Madrid",
//       photo: ,
//       speciality: ["Clinica", "Parejas", "Educativa"],
//       target: ["Niños", "Adolescentes", "Adultos"],
//       orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//       validation: true,
//       identification: "A-26175345" ,
//       description: “Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.
// ”,
//       rate: 50,
//       website: "www.ironhack.com",
//       role:'psychologist',
//     },
//     {
//       username:"psicologo6",
//       name: "Manu Avello TA",
//       email: "info@ironhack.com" ,
//       password: encryptedPass,
//       phone: 609765750,
//       address: "Calle Maiquez 13, 7A, 28001"
//       city: "Madrid",
//       photo: ,
//       speciality: ["Clinica", "Parejas", "Educativa"],
//       target: ["Niños", "Adolescentes", "Adultos"],
//       orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//       validation: true,
//       identification: "A-26175346" ,
//       description:” Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.
// ” ,
//       rate: 50,
//       website: "www.ironhack.com",
//       role:'psychologist',
//     },
//
//     {
//       username:"psicologo7",
//       name: "Floky El Promise All",
//       email: "info@ironhack.com" ,
//       password: encryptedPass,
//       phone: 609765750,
//       address: "Calle Hermosilla 18, 3B, 28000"
//       city: "Madrid",
//       photo: ,
//       speciality: ["Clinica", "Parejas", "Educativa"],
//       target: ["Niños", "Adolescentes", "Adultos"],
//       orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//       validation: true,
//       identification: "A-26175347" ,
//       description:” Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.
// ” ,
//       rate: 50,
//       website: "www.ironhack.com",
//       role:'psychologist',
//     },
//
//     {
//       username:"psicologo8",
//       name: "Cristian Quasi TA",
//       email: "info@ironhack.com" ,
//       password: encryptedPass,
//       phone: 609765750,
//       address: "Calle Goya 34, 2A, 28018"
//       city: "Madrid",
//       photo: ,
//       speciality: ["Clinica", "Parejas", "Educativa"],
//       target: ["Niños", "Adolescentes", "Adultos"],
//       orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//       validation: true,
//       identification: "A-26175348" ,
//       description:” Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.
// ” ,
//       rate: 50,
//       website: "www.ironhack.com",
//       role:'psychologist',
//     },
//     {
//       username: "psicologo9",
//       name: "Marc El Jefe",
//       email: "info@ironhack.com" ,
//       password: encryptedPass,
//       phone: 609765750,
//       address: "Calle Principe de Vergara 18, 1A, 28020"
//       city: Madrid,
//       photo: ,
//       speciality: ["Clinica", "Parejas", "Educativa"],
//       target: ["Niños", "Adolescentes", "Adultos"],
//       orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//       validation: true,
//       identification: "A-26175349" ,
//       description:” Lorem fistrum pecador officia magna aliquip ut fistro ese pedazo de reprehenderit. Consectetur caballo blanco caballo negroorl ese que llega nostrud benemeritaar eiusmod torpedo fistro sed aliqua. Commodo me cago en tus muelas nisi reprehenderit veniam llevame al sircoo pupita qui. Sed a wan te voy a borrar el cerito me cago en tus muelas no puedor labore eiusmod irure dolore. Qué dise usteer commodo aliqua a gramenawer papaar papaar torpedo consectetur enim commodo qué dise usteer torpedo.
// ” ,
//       rate: 50,
//       website: "www.ironhack.com",
//       role:'psychologist',
//     },
//   {
//     username:"Clinica 0",
//     name: "Clinica Hurtado de Mendoza",
//     email: "info@ironhack.com",
//     password: encryptedPass,
//     phone: 609765750,
//     address: "Calle Narvaez 1, 2T, 28004"
//     city: "Madrid",
//     photo: “http://www.guiadeposgrados.com/wp-content/uploads/2011/01/maestria-en-piscologia-clinica-en-la-uat.jpg”,
//     speciality: ["Clinica", "Parejas", "Educativa"],
//     target: ["Niños", "Adolescentes", "Adultos"],
//     orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//     validation: true,
//     identification: "A-26175340" ,
//     description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//     rate: 50,
//     website: "www.ironhack.com",
//     role:'psychologist',
//   },
//   {
//     username:"Clinica 1",
//     name: "Clinica IronHack",
//     email: "info@ironhack.com" ,
//     password: encryptedPass,
//     phone: 609765751,
//     address: "Calle Alcala 1, 2T, 28004"
//     city: "Madrid",
//     photo: “http://aimacpc.es/wp-content/uploads/Sala-para-ninos-en-Aima-psicologia-clinica-en-santiago.jpg”,
//     speciality: ["Clinica", "Parejas", "Educativa"],
//     target: ["Niños", "Adolescentes", "Adultos"],
//     orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//     validation: true,
//     identification: "A-26175341" ,
//     description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//     rate: 50,
//     website: "www.ironhack.com",
//     role:'psychologist',
//   },
//   {
//     username:"Clinica 2",
//     name: "Clinica El Matadero",
//     email: "info@ironhack.com" ,
//     password: encryptedPass,
//     phone: 609765750,
//     address: "Calle Narvaez 1, 2T, 28004"
//     city: "Madrid",
//     photo: “http://www.verticespsicologos.com/sites/default/files/styles/galeria/public/psicologia-clinica-pozuelo-alarcon.JPG”,
//     speciality: ["Clinica", "Parejas", "Educativa"],
//     target: ["Niños", "Adolescentes", "Adultos"],
//     orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//     validation: true,
//     identification: "A-26175340" ,
//     description: “Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ”,
//     rate: 50,
//     website: "www.ironhack.com",
//     role:'psychologist',
//   },
//   {
//     username:"Clinica 3",
//     name: "Clinica Perros Malos",
//     email: "info@ironhack.com" ,
//     password: encryptedPass,
//     phone: 609765750,
//     address: "Calle Serrano 1, 2T, 28003"
//     city: "Madrid",
//     photo: “https://imagenes.paginasamarillas.es/centro-especializado-de-psicologia-clinica/fotos/318/204/42N/004/gfoto01.jpg”,
//     speciality: ["Clinica", "Parejas", "Educativa"],
//     target: ["Niños", "Adolescentes", "Adultos"],
//     orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//     validation: true,
//     identification: "A-26175340" ,
//     description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//     rate: 50,
//     website: "www.ironhack.com",
//     role:'psychologist',
//   },
//     {
//       username:"Clinica 4",
//       name: "Clinica Floky",
//       email: "info@ironhack.com" ,
//       password: encryptedPass,
//       phone: 609765750,
//       address: "Calle Bolivia 17, 4F, 28005"
//       city: "Madrid",
//       photo: “http://www.qicenter.es/wp-content/uploads/2015/02/clinica-fisioterapia-malaga-qicenter.png” ,
//       speciality: ["Clinica", "Parejas", "Educativa"],
//       target: ["Niños", "Adolescentes", "Adultos"],
//       orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//       validation: true,
//       identification: "A-26175344" ,
//       description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//       rate: 50,
//       website: "www.ironhack.com",
//       role:'psychologist',
//     },
//       {
//         username:"Clinica 5",
//         name: "Clinica Papu",
//         email: "info@ironhack.com" ,
//         password: encryptedPass,
//         phone: 609765750,
//         address: "Calle Jorge Juan 10, 3U, 28001"
//         city: "Madrid",
//         photo: ,
//         speciality: ["Clinica", "Parejas", "Educativa"],
//         target: ["Niños", "Adolescentes", "Adultos"],
//         orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//         validation: true,
//         identification: "A-26175345" ,
//         description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//         rate: 50,
//         website: "www.ironhack.com",
//         role:'psychologist',
//       },
//       {
//         username:"Clinica 6",
//         name: "Clinica Avello",
//         email: "info@ironhack.com" ,
//         password: encryptedPass,
//         phone: 609765750,
//         address: "Calle Maiquez 13, 7A, 28001"
//         city: "Madrid",
//         photo: “https://www.google.es/search?q=clinicas+de+psicologia&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjukYWc89bXAhWSDewKHaR4DpIQ_AUICigB&biw=1258&bih=723&dpr=2#imgdii=cGIyse7490VabM:&imgrc=p5Rt3D6NZGyRqM”,
//         speciality: ["Clinica", "Parejas", "Educativa"],
//         target: ["Niños", "Adolescentes", "Adultos"],
//         orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//         validation: true,
//         identification: "A-26175346" ,
//         description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//         rate: 50,
//         website: "www.ironhack.com",
//         role:'psychologist',
//       },
//
//       {
//         username:"Clinica 7",
//         name: "Clinica Del Pino",
//         email: "info@ironhack.com" ,
//         password: encryptedPass,
//         phone: 609765750,
//         address: "Calle Hermosilla 18, 3B, 28000"
//         city: "Madrid",
//         photo: “http://www.wikiejido.com/wp-content/uploads/2017/08/1633_359_1.jpg”,
//         speciality: ["Clinica", "Parejas", "Educativa"],
//         target: ["Niños", "Adolescentes", "Adultos"],
//         orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//         validation: true,
//         identification: "A-26175347" ,
//         description: “Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ”,
//         rate: 50,
//         website: "www.ironhack.com",
//         role:'psychologist',
//       },
//
//       {
//         username:"Clinica 8",
//         name: "Clinica Promesas",
//         email: "info@ironhack.com" ,
//         password: encryptedPass,
//         phone: 609765750,
//         address: "Calle Goya 34, 2A, 28018"
//         city: "Madrid",
//         photo: ,
//         speciality: ["Clinica", "Parejas", "Educativa"],
//         target: ["Niños", "Adolescentes", "Adultos"],
//         orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//         validation: true,
//         identification: "A-26175348" ,
//         description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//         rate: 50,
//         website: "www.ironhack.com",
//         role:'psychologist',
//       },
//       {
//         username: "Clinica 9",
//         name: "Clinica Hiring Week",
//         email: "info@ironhack.com" ,
//         password: encryptedPass,
//         phone: 609765750,
//         address: "Calle Principe de Vergara 18, 1A, 28020"
//         city: "Madrid",
//         photo: “https://i.masquemedicos.org/services/big-bilbao-psicologo-iespina-psicologia-clinica-20150218200203hme7.jpgLorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//         speciality: ["Clinica", "Parejas", "Educativa"],
//         target: ["Niños", "Adolescentes", "Adultos"],
//         orientation: ["Cognitivo conductual" , "Psicodinámica" , "Sistémica"],
//         validation: true,
//         identification: "A-26175349" ,
//         description:” Lorem fistrum la caidita aliqua magna eiusmod ese que llega. Nisi commodo qui a wan te va a hasé pupitaa commodo tiene musho peligro sit amet. Jarl caballo blanco caballo negroorl velit mamaar et exercitation aliqua nostrud. Duis tempor dolor benemeritaar no te digo trigo por no llamarte Rodrigor laboris consectetur dolore incididunt elit. Commodo ut se calle ustée jarl nostrud ut. De la pradera te voy a borrar el cerito duis nostrud. Consequat por la gloria de mi madre de la pradera eiusmod. Qui nostrud fistro consectetur aute. Consequat quis al ataquerl pupita et incididunt labore veniam.
// ” ,
//         rate: 50,
//         website: "www.ironhack.com",
//         role:'psychologist',
//         }
//       ];

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
