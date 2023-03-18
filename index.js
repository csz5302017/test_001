const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
	ctx.set("Access-Control-Allow-Origin", "http://localhost:3000")
	await next()
})
router.get('/api/user/:id', (ctx, next) => {
	if (ctx.params.id === '10001') {
		return ctx.body = {
			name: 'chenshengzhang!'
		}
	}
	return ctx.body = {
		errorMessage: 'error! this ID is empty!'
	}
});

app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3001);