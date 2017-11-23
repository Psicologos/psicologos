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
  speciality: [String],
  target: [String],
  orientation: [String],
  validation: {
    type: Boolean,
    default: false
  },
  identification: String, //nº colegiado / registro sanitario
  description: String,
  rate: Number, //nº colegiado / registro sanitario
  //tarifa / hora
  website: String,
  psychologist: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }], //psicologos asociados a una clinica
  associate_clinics: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  role: {
    type: String,
    enum: ['admin', 'psychologist', 'clinic', 'patient']
  },

}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
