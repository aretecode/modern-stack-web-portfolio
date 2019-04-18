export * from './log'
export * from './server'
export * from './graphql-modules'

import { startExpress, createApp } from './server'

// only run on local development
if (process.env.IS_NOW === undefined) {
  startExpress()
}

export default createApp
