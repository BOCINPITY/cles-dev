const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-koa');

// swagger配置
const swaggerSpec = swaggerJsdoc({
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API文档',
            version: '1.0.0',
        },
    },
    apis: ['./apidoc/*.js'], // 指向你的路由文件
});

// 导出一个组合中间件
module.exports = async (ctx, next) => {
    // 使用 swaggerUi.serve 中间件
    await swaggerUi.serve(ctx, async () => { });
    if (ctx.path === '/docs' || ctx.path === '/docs/') {
        return swaggerUi.setup(swaggerSpec)(ctx, next);
    }
    await next();
};
