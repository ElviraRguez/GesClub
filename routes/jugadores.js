var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Jugador = require('../models/Jugador.js');

/* GET ALL JUGADORES */
router.get('/', function(req, res, next) {
  Jugador.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE JUGADOR BY ID */
router.get('/:id', function(req, res, next) {
  Jugador.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE JUGADOR */
router.post('/', function(req, res, next) {
  Jugador.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE JUGADOR */
router.put('/:id', function(req, res, next) {
  Jugador.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE JUGADOR */
router.delete('/:id', function(req, res, next) {
  Jugador.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;