const sequelize = require('../db/connection');

const { DataTypes } = require('sequelize');


const Maestro = sequelize.define('Maestro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Maestro',
    timestamps: false
});

module.exports = Maestro;
