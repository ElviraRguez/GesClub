var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Miembro = require('../models/miembro');
var Usuario = require('../models/usuario');
var Categoria = require('../models/categoria');
var Club = require('../models/club');
var Incidencia = require('../models/incidencia');


//USUARIOS
router.post('/auth', function(req, res, next) {
  Usuario.findOne({email: req.body.email}, function(err, user) {
    if(!user || user.password != req.body.password) {
      return next(err);
    }
    return res.json(user);
  });
});

//CLUBES
router.get('/club', function(req, res, next) {
  Club.find(function (err, club) {
    if (err) return next(err);
    res.json(club);
  });
});

router.post('/club', function(req, res, next) {
  Club.find({idUsuario: req.body.idUsuario}, function(err, club) {
    if(!club) { return next(err); }
    return res.json(club);
  });
});

//MIEMBRO
router.get('/miembro', function(req, res, next) {
  Miembro.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
    console.log("api get miembros");
  });
});

router.get('/miembro/:id', function(req, res, next) {
  Miembro.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/miembro', function(req, res, next) {
  Miembro.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/miembro/club', function(req, res, next) {
  Miembro.find({club: req.body.club}, function(err, miembro) {
    if(!miembro) { return next(err); }
    return res.json(miembro);
  });
});

router.put('/miembro/:id', function(req, res, next) {
  Miembro.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    console.log('ey');
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/miembro/:id', function(req, res, next) {
  Miembro.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//CATEGORIA
router.get('/categoria', function(req, res, next) {
  Categoria.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/categoria/:id', function(req, res, next) {
  Categoria.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/categoria/club', function(req, res, next) {
  Categoria.find({club: req.body.club}, function(err, categoria) {
    if(!categoria) { return next(err); }
    return res.json(categoria);
  });
});

//INCIDENCIA
router.get('/incidencia', function(req, res, next) {
  Incidencia.find(function (err, products) {
    if (err) return next(err);
    Miembro.populate(products, {path: "miembro"},function(err, products){ //esto hace que cargue todo el objeto miembro a partir del Id.
      res.status(200).send(products);
    }); 
    console.log("api get incidencias");
  });
});

router.get('/incidencia/:id', function(req, res, next) {
  Incidencia.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/incidencia', function(req, res, next) {
  Incidencia.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/incidencia/:id', function(req, res, next) {
  Incidencia.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/incidencia/:id', function(req, res, next) {
  Incidencia.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
