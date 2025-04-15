const Router = require('koa-router');
const userRoutes = require('./userRoutes');

const router = new Router();

router.use('/users', userRoutes.routes(), userRoutes.allowedMethods());

module.exports = router;