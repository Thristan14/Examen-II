module.exports = (sequelize, Sequelize) => {
    const Proyecto = sequelize.define('proyectos', {
        id_proyecto: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_usuario: {
            type: Sequelize.INTEGER,
            allowNull: false 
        },
        nombre: {
            type: Sequelize.STRING(100),
            allowNull: false 
        },
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: true 
        },
        fecha_creacion: {
            type: Sequelize.DATE,
            allowNull: false 
        }
    });

    return Proyecto;
};
