const sequelize = require('../db/connection');

const { DataTypes } = require('sequelize');

const Maestro = require('./Maestro');
const Clase = require('./Clase');


const MaestroClase = sequelize.define('MaestroClase', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    maestroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Maestro,
            key: 'id'
        }
    },
    claseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Clase,
            key: 'id'
        }
    }
}, {
    tableName: 'MaestroClase',
    timestamps: false
});

// Relaciones
Maestro.belongsToMany(Clase, { through: MaestroClase, foreignKey: 'maestroId', otherKey: 'claseId' });
Clase.belongsToMany(Maestro, { through: MaestroClase, foreignKey: 'claseId', otherKey: 'maestroId' });

Maestro.hasMany(MaestroClase, { foreignKey: 'maestroId' });
Clase.hasMany(MaestroClase, { foreignKey: 'claseId' });
MaestroClase.belongsTo(Maestro, { foreignKey: 'maestroId' });
MaestroClase.belongsTo(Clase, { foreignKey: 'claseId' });

module.exports = MaestroClase;
