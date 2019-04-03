export * from './app'
export * from './log'
export * from './server'
export * from './graphql-modules'
export * from './caching'

import { startExpress } from './server'

startExpress()
