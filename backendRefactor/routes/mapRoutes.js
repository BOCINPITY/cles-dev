const Router = require('koa-router');
const mapController = require('../controllers/mapController');
const router = new Router({ prefix: '/maps' });
router.post('/', mapController.createMap);
router.get('/', mapController.getAllMaps);
router.get('/:id', mapController.getMapById);
router.put('/:id', mapController.updateMap);
router.delete('/:id', mapController.deleteMap);

module.exports = router;
