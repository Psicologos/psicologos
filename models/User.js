const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: {
        type: String,
        required: true
      },
  email: {
        type: String,
        required: true
      }
  password: {
        type: String,
        required: true
      }
  phone: Number,
  address: {
        type: String,
        required: true
      },
  photo: String,
  //[clinica, pareja, educativa, niños, adolescentes, adultos, cognitivo-conductual, psicodinamica, sistemica]
  detail: [{ type: Boolean, default: true }, { type: Boolean, default: true }, { type: Boolean, default: true },{ type: Boolean, default: true }, { type: Boolean, default: true }, { type: Boolean, default: true }, { type: Boolean, default: true }, { type: Boolean, default: true }, { type: Boolean, default: true }],
  comments: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  identification: {  //nº colegiado / registro sanitario
        type: String,
        required: true
      },
  description: String,
  rate: {  //nº colegiado / registro sanitario
        type: Number,
        required: true
      }, //tarifa / hora
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
    enum: ['admin', 'psychologist', 'clinic','patient'],
 },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
