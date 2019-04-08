const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/**
 * @todo add DefinePlugin
 * @example
 *   {
 *     DISABLE_CACHE: false,
 *     DISABLE_SSR: false,
 *     LOCAL_PRODUCTION: undefined,
 *     REALM_TYPE: 'browser' | 'node'
 *   }
 */
module.exports = withTypescript()
