/**
 * @see https://www.apollographql.com/docs/apollo-server/features/metrics.html#Granular-Logs
 */
import pino from 'pino'

function toLevel() {
  switch (process.env.NODE_ENV) {
    case 'test':
      return 'silent'
    case 'development':
      return 'debug'
    default:
    case 'production':
      return 'info'
  }
}

const logger = pino({
  level: toLevel(),
  prettyPrint: process.env.NODE_ENV === 'development' && {
    colorize: true,
  },
})

// tslint:disable:no-var-requires
const pinoExpressMiddleware = require('express-pino-logger')({
  logger,
})

export { pinoExpressMiddleware, logger }
