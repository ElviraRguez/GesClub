var mongoose = require('mongoose');

var miembroSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  dni: String,
  edad: Number,
  fechaNacimiento: Date,
  contacto: {
    email: String,
    telefono: Number,
    direccion: String
  },
  pais: String,
  funcion: String,
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club'
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria'
  },
  observaciones: String,
  equipaje : {
    tallaCamisa : String,
    tallaPantalon : String
  },
  cantidadCuota : Number,
  cuotaPagada : Boolean
});

module.exports = mongoose.model('Miembro', miembroSchema);
