/**
 * @see https://www.apollographql.com/docs/react/advanced/boost-migration
 * @see https://github.com/bitinn/node-fetch/issues/49
 * @see https://github.com/apollographql/apollo-link/issues/83
 * @see https://github.com/github/fetch#sending-cookies
 * @todo https://www.apollographql.com/docs/react/features/performance.html#cache-redirects
 */
import { ApolloClient, HttpLink, ApolloLink, ApolloClientOptions } from 'apollo-boost'
import { onError } from 'apollo-link-error'
import { GraphQLError } from 'graphql'
import { isEmpty, isObj } from './utils/is'
import { cache } from './apolloCache'
import { stateLink } from './apolloState'
import { logger } from './log'

const IS_BROWSER = typeof window === 'object'

const httpLink = new ApolloLink((operation, forward) => {
  const httpLinkActual = new HttpLink({
    get uri() {
      const extension =
        process.env.NODE_ENV === 'development' ? `?n=${operation.operationName}` : ''
      return `http://localhost:4000/graphql${extension}`
    },

    /**
     * @see https://github.com/apollographql/apollo-link/issues/236#issuecomment-348176745
     */
    fetchOptions: {method: 'GET'},

    credentials:
      process.env.NODE_ENV === 'development' || process.env.LOCAL_PRODUCTION
        ? 'include'
        : 'same-origin',
  })

  return httpLinkActual.request(operation, forward)
})

const logError = (error: GraphQLError): void => {
  const {message, locations, path} = error
  logger.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
}

const errorLink = onError(namedErrorResponseParams => {
  const {graphQLErrors, networkError, response} = namedErrorResponseParams
  const hasError = isObj(graphQLErrors) || !isEmpty(networkError)

  if (isObj(graphQLErrors)) {
    const list = graphQLErrors as GraphQLError[]
    list.forEach(logError)
  }
  if (!isEmpty(networkError)) {
    logger.error(`[Network error]: ${networkError}`)
  }

  if (hasError && isObj(response)) {
    response.errors = undefined
  }
})

/**
 * @see https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-error
 * @todo https://www.apollographql.com/docs/link/index.html#graphql-tools custom fetcher?
 */
const consoleLink = new ApolloLink((operation, forward) => {
  logger.info(`starting request for ${operation.operationName}`)

  if (forward !== undefined) {
    return forward(operation).map(data => {
      logger.info(`ending request for ${operation.operationName}`)
      return data
    })
  } else {
    // tslint:disable:no-null-keyword
    return null
    // tslint:enable:no-null-keyword
  }
})

/**
 * @todo
 * @requires https://github.com/apollographql/apollo-client/blob/master/docs/source/recipes/server-side-rendering.md#store-rehydration
 *
 * @see https://github.com/apollographql/apollo-client/blob/82a846c9591bcff975cc28d3786105b80a49b4ba/src/queries/queryTransform.ts#L30
 * @see https://github.com/apollographql/apollo-client/issues/1913#issuecomment-348359030
 */
const clientConfig: ApolloClientOptions<any> = {
  link: ApolloLink.from([consoleLink, errorLink, stateLink, httpLink]),
  cache,
  ssrMode: true,
  connectToDevTools: undefined,
}

if (process.env.DISABLE_SSR === 'true' && IS_BROWSER === true) {
  clientConfig.ssrMode = false
} else if (IS_BROWSER === true) {
  delete clientConfig.ssrMode
  clientConfig.ssrForceFetchDelay = 100
  clientConfig.connectToDevTools = true
}

/**
 * @see https://github.com/apollographql/apollo-client/issues/1419
 */
if (process.env.DISABLE_CACHE !== 'true') {
  clientConfig.cache = cache
}

const client = new ApolloClient(clientConfig)

export { cache }
export { client }
export { httpLink }
export { clientConfig }
