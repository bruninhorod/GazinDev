const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const DevSchema = new Schema({
  nome: { type: String, required: true },
  sexo: { type: String, required: true },
  idade: { type: Number, required: true },
  hobby: { type: String, required: true },
  datanascimento: { type: Date, required: true },
});

module.exports = mongoose.model('dev', DevSchema);
