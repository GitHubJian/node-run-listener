const koa = require('koa')
const run = require('../lib')
const port = 8431
const koaRouter = require('koa-router')
const open = require('node-open-browser')
const router = new koaRouter()

const indexPage = `http://local.sogou.com${(port ? ':' : '') + port}/api/test`

function start() {
  const app = new koa()

  const running = run({
    port: port,
    vhost: 'local.sogou.com'
  })

  router.get('/api/test', async function apiTest(ctx) {
    ctx.body = {
      code: 0,
      data: 'Hello, world',
      msg: ''
    }
  })

  app.use(router.routes()).use(router.allowedMethods())

  app.listen(port, function() {
    running()

    open.openBrowser(indexPage)
  })
}

process.on('uncaughtException', function(err) {
  console.log(err)
})

module.exports = start
