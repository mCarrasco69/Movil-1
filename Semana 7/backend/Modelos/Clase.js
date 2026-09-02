const sequelize = require('../db/connection');

const { DataTypes } = require('sequelize');


const Clase = sequelize.define('Clase', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Clase',
    timestamps: false
});

module.exports = Clase;
