const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/**
 * @see https://zeit.co/examples/nextjs/
 *
 * @todo add DefinePlugin
 * @example
 *   {
 *     DISABLE_CACHE: false,
 *     DISABLE_SSR: false,
 *     LOCAL_PRODUCTION: undefined,
 *     REALM_TYPE: 'browser' | 'node'
 *   }
 */
module.exports = withTypescript({
  target: 'serverless',
})
