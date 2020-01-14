const TELEGRAM_TOKEN = process.env.BOT_TOKEN || '1023212388:AAHOrrjkD1yD_iK457-gx065ssmKJzYlsy0'

const Telegraf = require('telegraf')
const fastifyApp = require('fastify')()

const bot = new Telegraf(TELEGRAM_TOKEN)

bot.on('text', ({ reply }) => reply('Hello'))
fastifyApp.use(bot.webhookCallback(`/${TELEGRAM_TOKEN}`))
// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook(`https://kinobu-sentry.herokuapp.com/${TELEGRAM_TOKEN}`)

fastifyApp.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})