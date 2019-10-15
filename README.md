### node 启动监听函数

```
npm i node-run-listener

const run = require('node-run-listener')

app.listen(port, run(options))
```

#### api

##### run

- run function
  @params options
  @return returnFunction

- options params list

| name  | desc      | type   | default           |
| ----- | --------- | ------ | ----------------- |
| port  | 端口号    | number | 8416              |
| vhost | 虚拟 host | string | local.powerjs.com |

- returnFunction params list

| name     | desc | type     | default |
| -------- | ---- | -------- | ------- |
| callback | 回调 | function | null    |
