module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define('tareas', {
        id_tarea: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_proyecto: {
            type: Sequelize.INTEGER,
            references: {
                model: 'proyectos', 
                key: 'id_proyecto' 
            }
        },
        nombre: {
            type: Sequelize.STRING(100)
        },
        estado: {
            type: Sequelize.STRING(100)
        },
        fecha_creacion: {
            type: Sequelize.DATE
        },
        fecha_vencimiento: {
            type: Sequelize.DATE
        }
    });

    return Tarea;
};
