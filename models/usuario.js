var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
  email: String,
  contraseña: String,
  nombre: String,
  telefono: Number
});

module.exports = mongoose.model('Usuario', usuarioSchema);
