const Router = require('koa-router');
const userController = require('../controllers/userController');
const router = new Router({ prefix: '/users' });

router.post('/', userController.createUser);

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;