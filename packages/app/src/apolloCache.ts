import { ApolloReducerConfig, InMemoryCache } from 'apollo-boost'

const IS_BROWSER = typeof window === 'object'

/**
 * @api @see https://github.com/apollographql/apollo-cache-persist#react
 * @api @see https://www.apollographql.com/docs/react/features/cache-updates.html#normalization
 */
export const inMemoryCacheConfig: ApolloReducerConfig = {
  // dataIdFromObject: x => `${x.__typename}:${x.identifier}`,
}
export const inMemoryCache = new InMemoryCache(inMemoryCacheConfig)
export const cache = IS_BROWSER
  ? inMemoryCache.restore((window as any).__APOLLO_STATE__)
  : inMemoryCache
