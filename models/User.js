const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: Number,
  address: {
    type: String,
    required: true
  },
  city: String,
  photo: String,
  //[clinica, pareja, educativa, niños, adolescentes, adultos, cognitivo-conductual, psicodinamica, sistemica]
  speciality: [String],
  target: [String],
  orientation: [String],
  // detail: [{
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }, {
  //   type: Boolean,
  //   default: true
  // }],
  validation: {
    type: Boolean,
    default: false
  },
  // validate: {
  //   type: Boolean,
  //   default: true
  // },
  identification: String, //nº colegiado / registro sanitario
  description: String,
  rate: Number, //nº colegiado / registro sanitario
  //tarifa / hora
  website: String,
  associate_psychologist: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }, //psicologos asociados a una clinica
  associate_clinics: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  associate_patients: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }, //psicólogos y clínicas asociados a los pacientes
  role: {
    type: String,
    enum: ['admin', 'psychologist', 'clinic', 'patient']
    // required: true
  },

}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
