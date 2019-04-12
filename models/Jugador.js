var mongoose = require('mongoose');

var JugadorSchema = new mongoose.Schema({
    dni: String,
    nombre: String,
    apellidos: String,
    fechaNacimiento: Date,
    edad: Number,
    pais: String,
    //Categorias, horarios, etc
  });

  module.exports = mongoose.model('Jugador', JugadorSchema);