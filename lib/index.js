const IP = require('ip')
const chalk = require('chalk')
const host = IP.address()

function run(options) {
  const port = options.port || 8416
  const vhost = options.vhost
  const env = options.env
  const name = options.name || options.appname

  return function(callback) {
    // app name
    name && console.log(chalk.yellow('[✨] APP_NAME: ') + chalk.green(name))

    // node_env
    env && console.log(chalk.yellow('[✨] NODE_ENV: ') + chalk.green(env))

    // server
    port == 8416
      ? console.log(chalk.yellow(`[🚀] Server started`))
      : console.log(chalk.yellow(`[🚀] Server is running`))

    // ip tips
    console.log(
      chalk.green(
        `[⚠️] 1. use your device to visit the following URL list, gets the IP of the URL you can access:`
      )
    )

    // 127.0.0.1
    console.log(
      chalk.green(`       http://`) +
        chalk.yellow(`127.0.0.1`) +
        chalk.green(`${port ? ':' + port : ''}/`)
    )

    // local ip
    console.log(
      chalk.green(`       http://`) +
        chalk.yellow(host) +
        chalk.green(`${port ? ':' + port : ''}/`)
    )

    // vhost
    vhost &&
      console.log(
        chalk.green(`       http://`) +
          chalk.yellow(vhost) +
          chalk.green(`${port ? ':' + port : ''}/`)
      )

    // note
    console.log(
      chalk.yellow(
        `       Note: If all the above URLs are unable to access, check the server setting`
      )
    )

    // configure
    console.log(
      chalk.green(
        `[️️⚠️] 2. configure your device to use server as its HTTP and HTTPS proxy on `
      ) +
        chalk.yellow('IP') +
        chalk.green(`${port ? ':' + port : ''}`)
    )

    // chrome
    console.log(
      chalk.green(`[⚠️] 3. use `) +
        chalk.yellow('Chrome') +
        chalk.green(' to visit ') +
        chalk.yellow('http://local.powerjs.com/') +
        chalk.green(' to get started')
    )

    callback && callback()
  }
}

module.exports = run
