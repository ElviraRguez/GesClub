var mongoose = require('mongoose');

var categoriaSchema = new mongoose.Schema({
  nombre: String,
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club'
  }
});

module.exports = mongoose.model('Categoria', categoriaSchema);
