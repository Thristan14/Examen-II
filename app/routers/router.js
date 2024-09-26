const express = require('express');
const router = express.Router();

const Books = require('../controllers/books.controllers.js');
const Usuario = require('../controllers/usuario.controllers.js');
const Proyecto = require('../controllers/proyecto.controllers.js');
const Tarea = require('../controllers/tarea.controllers.js')

// Rutas para el controlador de books
router.post('/api/books/create', Books.create);
router.get('/api/books/all', Books.findAll);
router.get('/api/books/onebyid/:id', Books.findById);
router.put('/api/books/update/:id', Books.update);
router.delete('/api/books/delete/:id', Books.delete);

// Rutas para el controlador de usuario
router.post('/api/usuarios/create', Usuario.create);
router.get('/api/usuarios/all', Usuario.findAll);
router.get('/api/usuarios/onebyid/:id', Usuario.findById);
router.put('/api/usuarios/update/:id', Usuario.update);
router.delete('/api/usuarios/delete/:id', Usuario.delete);

// Rutas para el controlador de proyecto
router.post('/api/proyectos/create', Proyecto.create);
router.get('/api/proyectos/all', Proyecto.findAll);
router.get('/api/proyectos/onebyid/:id', Proyecto.findById);
router.put('/api/proyectos/update/:id', Proyecto.update);
router.delete('/api/proyectos/delete/:id', Proyecto.delete);

// Rutas para el controlador de tarea
router.post('/api/tareas/create', Tarea.create);
router.get('/api/tareas/all', Tarea.findAll);
router.get('/api/tareas/onebyid/:id', Tarea.findById);
router.put('/api/tareas/update/:id', Tarea.update);
router.delete('/api/tareas/delete/:id', Tarea.delete);


module.exports = router;
