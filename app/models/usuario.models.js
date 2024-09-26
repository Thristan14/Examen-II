module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuarios', {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "Identificador único del usuario"
        },
        nombre: {
            type: Sequelize.STRING(100),
            allowNull: false,
            comment: "Nombre del usuario"
        },
        correo: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
            comment: "Correo electrónico del usuario"
        },
        contrasena: {
            type: Sequelize.STRING(255),
            allowNull: false,
            comment: "Contraseña del usuario (hashed)"
        },
        fecha_creacion: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            comment: "Fecha de creación del usuario"
        }
    });

    return Usuario;
};
