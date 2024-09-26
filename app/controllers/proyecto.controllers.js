const db = require('../config/db.config.js');
const Proyecto = db.Proyecto;

// Crear un nuevo proyecto
exports.create = (req, res) => {
    let proyecto = {};

    try {
        proyecto.id_usuario = req.body.id_usuario; 
        proyecto.descripcion = req.body.descripcion;
        proyecto.fecha_creacion = req.body.fecha_creacion;

        Proyecto.create(proyecto).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a project with id = " + result.id_proyecto,
                proyecto: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todos los proyectos
exports.findAll = (req, res) => {
    Proyecto.findAll()
        .then(proyectos => {
            res.status(200).json({
                message: "Get all projects' Infos Successfully!",
                proyectos: proyectos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar un proyecto por Id
exports.findById = (req, res) => {
    Proyecto.findByPk(req.params.id)
        .then(proyecto => {
            res.status(200).json({
                message: "Successfully retrieved a project with id = " + req.params.id,
                proyecto: proyecto
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar un proyecto por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Proyecto.update(req.body, { where: { id_proyecto: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a project with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a project with id = " + id,
                error: error.message
            });
        });
}

// Eliminar un proyecto por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Proyecto.destroy({ where: { id_proyecto: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a project with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a project with id = " + id,
                error: error.message
            });
        });
}
