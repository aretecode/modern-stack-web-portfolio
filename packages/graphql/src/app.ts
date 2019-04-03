import { createApp } from './server'
import { logger } from './log'

export function startExpress() {
  logger.info('[graphql] creating...')
  const app = createApp()

  const port = process.env.API_PORT || '4000'

  const host = process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0'

  const listener = app.listen(+port, host, () => {
    logger.info('[graphql] listening on: ', {[host]: port})
  })

  process.on('SIGTERM', () => {
    logger.warn('[graphql] SIGTERM')
    listener.close()
  })
}
