import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { InMemoryLRUCache as KeyValueCache } from 'apollo-server-caching'
import { logger, pinoExpressMiddleware } from './log'
import { appModules } from './graphql-modules'

const {schema} = appModules

/**
 * @see https://github.com/apollographql/apollo-server/blob/master/packages/apollo-server-core/src/runHttpQuery.ts#L343
 * @see https://github.com/apollographql/apollo-server/blob/c4d3a93e7bc8a9ffb1692c50a4f766422f30e665/packages/apollo-server-core/src/runHttpQuery.ts#L343
 */
function createServer() {
  const debugCache = new KeyValueCache()
  return new ApolloServer({
    schema,
    playground: true,
    tracing: false,
    introspection: true,
    cache: debugCache,
    cacheControl: {
      defaultMaxAge: 60,
      stripFormattedExtensions: true,
    },
    /**
     * @see https://blog.apollographql.com/full-stack-error-handling-with-graphql-apollo-5c12da407210
     * @see https://github.com/apollographql/apollo-server/issues/1166
     * @see https://github.com/apollographql/apollo-server/blob/19478920e4a6bdbf57b10ddc782e685542fd9bd4/packages/apollo-server-core/src/formatters.ts#L14
     * @see https://www.apollographql.com/docs/apollo-server/features/errors.html
     */
    formatError(error: Error) {
      logger.error(error)
      return error
    },
    formatResponse(response: any = {}) {
      if (process.env.NODE_ENV === 'test') {
        return response
      }

      const {data, ...otherResponseThings} = response

      if (data === undefined) {
        logger.error('[graphql]{response}: data was undefined')
        logger.error(otherResponseThings)
        return
      }

      const {__schema, ...whatWeWantToLog} = data
      const hasOtherThings = Object.keys(otherResponseThings).length > 0

      logger.info('[graphql]{response}: ', whatWeWantToLog)
      if (hasOtherThings) {
        logger.info('[graphql]{response}(...remaining): ', otherResponseThings)
      }

      return response
    },
    engine: process.env.APOLLO_ENGINE_KEY && {
      apiKey: process.env.APOLLO_ENGINE_KEY,
    },
  })
}

function createApp() {
  const server = createServer()
  const app = express()

  const corsOptions = {
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
  }

  app.use(pinoExpressMiddleware)

  server.applyMiddleware({app, cors: corsOptions})
  return app
}

export { schema, createApp }
export default createApp
