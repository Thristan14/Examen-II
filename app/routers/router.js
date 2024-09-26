const express = require('express');
const router = express.Router();

const Books = require('../controllers/books.controllers.js');
const Books = require('../controllers/usuario.controllers.js');

// Rutas para el controlador de books
router.post('/api/books/create', Books.create);
router.get('/api/books/all', Books.findAll);
router.get('/api/books/onebyid/:id', Books.findById);
router.put('/api/books/update/:id', Books.update);
router.delete('/api/books/delete/:id', Books.delete);

// Rutas para el controlador de usuario
router.post('/api/usuario/create', Usuario.create);
router.get('/api/usuario/all', Usuario.findAll);
router.get('/api/usuario/onebyid/:id', Usuario.findById);
router.put('/api/usuario/update/:id', Usuario.update);
router.delete('/api/usuario/delete/:id', Usuario.delete);


module.exports = router;
