const db = require('../config/db.config.js');
const Usuario = db.Usuario;

// Crear un nuevo usuario
exports.create = (req, res) => {
    let usuario = {};

    try {
        usuario.nombre = req.body.nombre;
        usuario.correo = req.body.correo;
        usuario.contrasena = req.body.contrasena;

        Usuario.create(usuario).then(result => {
            res.status(201).json({
                message: "Usuario creado exitosamente con id = " + result.id_usuario,
                usuario: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el usuario.",
            error: error.message
        });
    }
}

// Recuperar todos los usuarios
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(usuarios => {
            res.status(200).json({
                message: "Información de todos los usuarios recuperada exitosamente.",
                usuarios: usuarios
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al recuperar usuarios.",
                error: error
            });
        });
}

// Encontrar un usuario por Id
exports.findById = (req, res) => {
    Usuario.findByPk(req.params.id)
        .then(usuario => {
            res.status(200).json({
                message: "Usuario recuperado exitosamente con id = " + req.params.id,
                usuario: usuario
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al recuperar el usuario.",
                error: error
            });
        });
}

// Actualizar un usuario por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Usuario.update(req.body, { where: { id_usuario: id } })
        .then(() => {
            res.status(200).json({
                message: "Usuario actualizado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se puede actualizar el usuario con id = " + id,
                error: error.message
            });
        });
}

// Eliminar un usuario por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Usuario.destroy({ where: { id_usuario: id } })
        .then(() => {
            res.status(200).json({
                message: "Usuario eliminado exitosamente con id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> No se puede eliminar el usuario con id = " + id,
                error: error.message
            });
        });
}

