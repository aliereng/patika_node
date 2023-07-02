const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const port = 3000;
const app = new Koa();
const router = new Router();
app.use(bodyParser());

router.get('/', (ctx, next)=> {
    ctx.body = '<h1>index sayfasina hosgeldiniz</h1>'
})
router.get('/hakkimda', (ctx, next)=> {
    ctx.body = '<h1>hakkimda sayfasina hosgeldiniz</h1>'
})
router.get('/iletisim', (ctx, next)=> {
    ctx.body = '<h1>iletisim sayfasina hosgeldiniz</h1>'
})

app.use(router.routes());

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});