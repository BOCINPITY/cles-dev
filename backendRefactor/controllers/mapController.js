const Map = require('../model/mapModel');

// Create a new map
const createMap = async (ctx) => {
    try {
        const { name, width, height, startPoint, endPoint, obstacles } = ctx.request.body;
        const newMap = await Map.create({ name, width, height, startPoint, endPoint, obstacles });
        ctx.status = 201;
        ctx.body = newMap;
    } catch (error) {
        ctx.status = 500;
        ctx.body = { message: 'Error creating map', error };
    }
};

// Read all maps
const getAllMaps = async (ctx) => {
    try {
        const maps = await Map.findAll();
        ctx.status = 200;
        ctx.body = maps;
    } catch (error) {
        ctx.status = 500;
        ctx.body = { message: 'Error fetching maps', error };
    }
};

// Read a single map by ID
const getMapById = async (ctx) => {
    try {
        const { id } = ctx.params;
        const map = await Map.findByPk(id);
        if (!map) {
            ctx.status = 404;
            ctx.body = { message: 'Map not found' };
            return;
        }
        ctx.status = 200;
        ctx.body = map;
    } catch (error) {
        ctx.status = 500;
        ctx.body = { message: 'Error fetching map', error };
    }
};

// Update a map by ID
const updateMap = async (ctx) => {
    try {
        const { id } = ctx.params;
        const { name, width, height, startPoint, endPoint, obstacles } = ctx.request.body;
        const map = await Map.findByPk(id);
        if (!map) {
            ctx.status = 404;
            ctx.body = { message: 'Map not found' };
            return;
        }
        await map.update({ name, width, height, startPoint, endPoint, obstacles });
        ctx.status = 200;
        ctx.body = map;
    } catch (error) {
        ctx.status = 500;
        ctx.body = { message: 'Error updating map', error };
    }
};

// Delete a map by ID
const deleteMap = async (ctx) => {
    try {
        const { id } = ctx.params;
        const map = await Map.findByPk(id);
        if (!map) {
            ctx.status = 404;
            ctx.body = { message: 'Map not found' };
            return;
        }
        await map.destroy();
        ctx.status = 204;
    } catch (error) {
        ctx.status = 500;
        ctx.body = { message: 'Error deleting map', error };
    }
};

module.exports = {
    createMap,
    getAllMaps,
    getMapById,
    updateMap,
    deleteMap,
};