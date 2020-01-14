const Telegraf = require('telegraf')
const fastifyApp = require('fastify')()

const TELEGRAM_TOKEN = process.env.BOT_TOKEN || '1023212388:AAHOrrjkD1yD_iK457-gx065ssmKJzYlsy0'

const bot = new Telegraf(TELEGRAM_TOKEN)

bot.on('text', ({ reply }) => reply('Hello'))
fastifyApp.use(bot.webhookCallback('/secret-path'))
// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook(`https://kinobu-sentry.herokuapp.com/secret-path/${TELEGRAM_TOKEN}`)

fastifyApp.route({
    method: 'POST',
    url: '/secret-path',
    schema: {
      querystring: {
        name: { type: 'string' },
        excitement: { type: 'integer' }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    },
    handler: function (request, reply) {
        console.dir(request)
        console.log("kek", request)
      reply.send({ hello: 'world' })
    }
  })


fastifyApp.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})