const Telegraf = require('telegraf')
const fastifyApp = require('fastify')()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('text', ({ reply }) => reply('Hello'))
fastifyApp.use(bot.webhookCallback('/'))
// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook('kinobu-sentry.herokuapp.com')

fastifyApp.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})