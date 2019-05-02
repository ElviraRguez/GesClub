var mongoose = require('mongoose');

var incidenciaSchema = new mongoose.Schema({
  asunto: String,
  fechaInicio: Date,
  fechaFin: Date,
  detalle: String,
  miembro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Miembro'
  }
});
module.exports = mongoose.model('Incidencia', incidenciaSchema);
