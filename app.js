let Koa = require('koa');
const MongoDB = require('mongodb')
let websockify = require('koa-websocket');
// let app = new Koa();
const app = websockify(new Koa());

let log4js = require('log4js');
log4js.configure('./log4js.json');
log4js.level = 'DEBUG';
let logger = log4js.getLogger('app');

let Router = require('koa-router');
let router = new Router;


let isDocker = false;
try{
	fs.accessSync('/.dockerenv');
	isDocker = true;
	logger.info('run in docker')
}
catch (e) {
	isDocker = false
	logger.info('not in docker')
}

function getServerInfo() {
	let os = require("os");
	let ifaces = os.networkInterfaces();
	let adresses = Object.keys(ifaces).reduce(function (result, dev) {
		return result.concat(ifaces[dev].reduce(function (result, details) {
			return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
		}, []));
	});
	return `IP ${adresses}, hostname: ${os.hostname()}`
}

let url = `mongodb://localhost:27017`;
if(isDocker)
	url = `mongodb://mongouser:mongopass@mongo:27017/testdb?authSource=admin`;

const mongoClient = new MongoDB.MongoClient(url);
mongoClient.connect((err) =>
{
	if(!err)
	{
		logger.info(`MongoDB Connected successfully`);
		app.context.db = mongoClient.db("testdb");
	}
	else {
		logger.error('connect mongo failed:%s', err)
	}
});

// const redis = require('redis');
// let rds = redis.createClient({url: "redis://redis:6379"});
// rds.on('connect', ()=> console.log('redis connect ok'))
// rds.connect();
//
// router.all('/redis', async ctx =>{
// 	let count = await rds.incr("count")
// 	logger.info(`on test redis page, count ${count}`)
// 	ctx.body = `on test redis page, visit count ${count} \n\n${getServerInfo()}`
// });

router.all('/', async ctx =>{
    logger.info('on index page')
	ctx.body = `index page \n\n${getServerInfo()}`
});

router.all('/hello/:name', async ctx =>{
	let name = ctx.params.name
    logger.info('on hello page')
	ctx.body = `hello ${name ? name : 'world'}`
});

router.all('/user/regist', async ctx =>{
	let username = ctx.query.username
	let password = ctx.query.password
	try{
		await ctx.db.collection("users").updateOne({_id: username}, {'$set': {password: password}}, {upsert: true})
	}
	catch (e) {
		ctx.body = e
	}
	ctx.body = `regist ok`
});

router.all('/user/login', async ctx =>{
	let username = ctx.query.username
	let password = ctx.query.password
	let user = await ctx.db.collection("users").findOne({_id: username, password})
	if(user)
		ctx.body = `登录成功：` + JSON.stringify(user)
	else
		ctx.body = '登录失败'
});

let wsRouter = new Router;
wsRouter.all('/ws', async ctx => {
	logger.info('connect ok');

	ctx.websocket.on('message', (message)=> {
		logger.info('recv msg:%s', message)
		ctx.websocket.send(`${getServerInfo()}: ${message}`)
	});

	ctx.websocket.on('close', ()=>{
		logger.info('connect closed');
	})
});

app.use(router.routes());
app.ws.use(wsRouter.routes());

let port = process.env.PORT || 8080;
try{
	app.listen(8080);
	logger.info('Server started successfully and listened on '+ port +'\n'+'http://localhost:'+port);
}catch(err){
	console.error(err);
}
