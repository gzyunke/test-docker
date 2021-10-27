let log4js = require('log4js');

log4js.configure('./log4js.json');
log4js.level = 'DEBUG';

//log
module.exports = async (ctx, next) => {
    let accessLog = log4js.getLogger('access');
    accessLog.trace(`${ctx.method} ${ctx.url}`);
    ctx.logger = log4js.getLogger('app');
    const start = Date.now();
    try{
        await next();
    }catch(err){
        if(err.code){
            //过滤已知的错误返回
            ctx.logger.debug(err);
        }else{
            ctx.logger.error(err);
            ctx.status = 500;//内部错误
        }
    }
    const ms = Date.now() - start;

    accessLog.trace(`----------------- ${ctx.status} - ${ms}ms\n`);
};
