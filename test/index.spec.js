const koa = require('koa')
const run = require('../lib')
const port = 8419
const running = run({ port: port, vhost: 'local.sogou.com' })
const app = new koa()

app.listen(port, function() {
  running(function() {
    console.log('123123')
  })
})
