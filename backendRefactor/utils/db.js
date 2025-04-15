const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
});

module.exports = sequelize;