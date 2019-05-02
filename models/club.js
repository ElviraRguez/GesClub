var mongoose = require('mongoose');

var clubSchema = new mongoose.Schema({
  nombre: String,
  acronimo: String,
  deporte: String,
  sede: {
    nombre: String,
    direccion: String
  },
  web: String,
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

module.exports = mongoose.model('Club', clubSchema);
