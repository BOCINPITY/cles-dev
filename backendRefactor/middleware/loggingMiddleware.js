const log4js = require('log4js');

// 日志配置
log4js.configure({
    appenders: {
        success: { type: 'file', filename: './logs/success.log' },
        error: { type: 'file', filename: './logs/error.log' },
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['console', 'success'], level: 'info' },
        error: { appenders: ['console', 'error'], level: 'error' }
    }
});

const logger = log4js.getLogger(); // Default logger
const errorLogger = log4js.getLogger('error'); // Error logger

// Middleware to log requests and errors
module.exports = async (ctx, next) => {
    const start = Date.now();
    try {
        await next();
        const responseTime = Date.now() - start;
        logger.info(`请求方法:${ctx.method}请求路径:${ctx.url} - ${responseTime}ms`);
    } catch (err) {
        errorLogger.error(`发生错误: ${err.message}`, { ctx });
        throw err;
    }
};
