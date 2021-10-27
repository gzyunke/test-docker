let Koa = require('koa');
let app = new Koa();

// const redis = require('redis');
// let rds = redis.createClient({url: "redis://redis:6379"});
// rds.on('connect', ()=> console.log('redis connect ok'))
// rds.connect();


let log4js = require('log4js');
log4js.configure('./log4js.json');
log4js.level = 'DEBUG';
let logger = log4js.getLogger('app');

let Router = require('koa-router');

let router = new Router;

router.all('/', async ctx =>{
    logger.info('on index page')
	ctx.body = `index page`
});

router.all('/hello/:name', async ctx =>{
	let name = ctx.params.name
    logger.info('on hello page')
	ctx.body = `hello ${name ? name : 'world'}`
});

// router.all('/redis', async ctx =>{
// 	let count = await rds.incr("count")
// 	logger.info(`on test redis page, count ${count}`)
// 	ctx.body = `on test redis page, 44 count ${count} `
// });

app.use(router.routes());

let port = process.env.PORT || 8080;
try{
	app.listen(8080);
	logger.info('Server started successfully and listened on '+ port +'\n'+'http://localhost:'+port);
}catch(err){
	console.error(err);
}
