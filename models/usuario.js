var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
  email: String,
  password: String,
  nombre: String,
  telefono: Number
});

module.exports = mongoose.model('Usuario', usuarioSchema);
