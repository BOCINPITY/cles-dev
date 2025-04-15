const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');
const cors = require('@koa/cors');
const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});