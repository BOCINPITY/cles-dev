const sequelize = require('./utils/db');
const User = require('./model/userModel');
const Map = require('./model/mapModel');

const syncModels = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing models:', error);
    }
};

syncModels();