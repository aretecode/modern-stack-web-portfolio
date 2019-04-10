const withTypescript = require('@zeit/next-typescript')
const withOffline = require('next-offline')
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
const typescriptConfig = withTypescript({
  target: 'serverless',
})

const workboxConfig = withOffline(typescriptConfig)

module.exports = workboxConfig
