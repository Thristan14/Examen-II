const express = require('express');
const router = express.Router();

const Books = require('../controllers/books.controllers.js');

// Rutas para el controlador de books
router.post('/api/books/create', Books.create);
router.get('/api/books/all', Books.findAll);
router.get('/api/books/onebyid/:id', Books.findById);
router.put('/api/books/update/:id', Books.update);
router.delete('/api/books/delete/:id', Books.delete);

module.exports = router;
