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
            res.status(200).json({
                message: "Uploaded successfully a user with id = " + result.id_usuario,
                usuario: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los usuarios
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(usuarios => {
            res.status(200).json({
                message: "Get all users' Infos Successfully!",
                usuarios: usuarios
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un usuario por Id
exports.findById = (req, res) => {
    Usuario.findByPk(req.params.id)
        .then(usuario => {
            res.status(200).json({
                message: "Successfully retrieved a user with id = " + req.params.id,
                usuario: usuario
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
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
                message: "Updated successfully a user with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a user with id = " + id,
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
                message: "Deleted successfully a user with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a user with id = " + id,
                error: error.message
            });
        });
}
