const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        useEslint: false, // ignored if `useBabel` is false
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          tslint: require.resolve('../../tslint.json'),
          watch: './src',
          typeCheck: true,
        },
      },
    },
  ],
  /**
   * @todo add DefinePlugin
   * @example
   *   {
   *     DISABLE_CACHE: false,
   *     DISABLE_SSR: false,
   *     LOCAL_PRODUCTION: undefined,
   *   }
   */
  modify: (config, {target, dev}, webpack) => {
    // config.plugins.push(new InterpolateHtmlPlugin(env.raw))
    return config
  },
}
