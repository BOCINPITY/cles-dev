const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Map = sequelize.define('Map', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    width: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    startPoint: {
        type: DataTypes.JSON, // Object with {x, y}
        allowNull: false,
    },
    endPoint: {
        type: DataTypes.JSON, // Object with {x, y}
        allowNull: false,
    },
    obstacles: {
        type: DataTypes.JSON, // Store array of objects as JSON
        allowNull: false,
    },
}, {
    timestamps: true, // Ensure timestamps are enabled
});

module.exports = Map;