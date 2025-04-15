const Router = require('koa-router');
const User = require('../model/userModel');

const router = new Router();

router.get('/', async (ctx) => {
    try {
        const users = await User.findAll();
        ctx.body = users;
    } catch (err) {
        ctx.status = 500;
        ctx.body = { error: 'Failed to fetch users' };
    }
});

router.post('/', async (ctx) => {
    try {
        const newUser = await User.create(ctx.request.body);
        ctx.status = 201;
        ctx.body = newUser;
    } catch (err) {
        ctx.status = 400;
        ctx.body = { error: 'Failed to create user' };
    }
});

module.exports = router;