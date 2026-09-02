const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'Universidad',
    'root',
    'admin123',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);

sequelize.authenticate()
    .then(() => console.log('Conexión exitosa'))
    .catch((error) => console.log('Error de conexión:', error));

module.exports = sequelize;
