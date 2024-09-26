const db = require('../config/db.config.js');
const Tarea = db.Tarea; // Asegúrate de que el modelo Tarea esté correctamente exportado

// Crear una nueva tarea
exports.create = (req, res) => {
    let tarea = {};

    try {
        tarea.id_proyecto = req.body.id_proyecto;
        tarea.nombre = req.body.nombre;
        tarea.estado = req.body.estado;
        tarea.fecha_creacion = req.body.fecha_creacion;
        tarea.fecha_vencimiento = req.body.fecha_vencimiento;

        Tarea.create(tarea).then(result => {
            res.status(200).json({
                message: "Uploaded successfully a task with id = " + result.id_tarea,
                tarea: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

// Recuperar todas las tareas
exports.findAll = (req, res) => {
    Tarea.findAll()
        .then(tareas => {
            res.status(200).json({
                message: "Get all tasks' Infos Successfully!",
                tareas: tareas
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Encontrar una tarea por Id
exports.findById = (req, res) => {
    Tarea.findByPk(req.params.id)
        .then(tarea => {
            res.status(200).json({
                message: "Successfully retrieved a task with id = " + req.params.id,
                tarea: tarea
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

// Actualizar una tarea por Id
exports.update = (req, res) => {
    let id = req.params.id;
    Tarea.update(req.body, { where: { id_tarea: id } })
        .then(() => {
            res.status(200).json({
                message: "Updated successfully a task with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot update a task with id = " + id,
                error: error.message
            });
        });
}

// Eliminar una tarea por Id
exports.delete = (req, res) => {
    let id = req.params.id;
    Tarea.destroy({ where: { id_tarea: id } })
        .then(() => {
            res.status(200).json({
                message: "Deleted successfully a task with id = " + id
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error -> Cannot delete a task with id = " + id,
                error: error.message
            });
        });
}
