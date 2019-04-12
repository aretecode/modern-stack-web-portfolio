/**
 * @see https://github.com/infernojs/inferno/blob/master/scripts/rollup/plugins/index.js
 * @see https://github.com/rollup/rollup-starter-app
 */
import nodeResolve from 'rollup-plugin-node-resolve'
import tsPlugin from 'rollup-plugin-typescript2'
import alias from 'rollup-plugin-alias'
import progress from 'rollup-plugin-progress'
import commonjs from 'rollup-plugin-commonjs'
import replacePlugin from 'rollup-plugin-replace'

// const pkg = require('./package.json')
// const external = Object.keys(pkg.devDependencies || {})

export default {
  input: './src/index.ts',
  cache: false,
  external(requested, from, something = Boolean) {
    const isExternal =
      requested.includes('node_modules') || from.includes('node_modules')
    return isExternal
  },

  output: [
    {
      dir: 'dist',
      file: 'rollup.js',
      format: 'cjs',
    },
    {
      dir: 'dist',
      file: 'rollup.es.js',
      format: 'es',
    },
  ],
  plugins: [
    progress(),
    tsPlugin({
      abortOnError: false,
      cacheRoot: `.rpt2_cache`,
      check: false,
      clean: true,
      exclude: ['*.spec*', '**/*.spec*', '**/__tests__/*'],
      tsconfig: require.resolve('./tsconfig.json'),
    }),
    replacePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    nodeResolve({
      extensions: ['.ts', '.tsx', '.js', '.json'],
      jsnext: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    alias({
      src: './src/',
    }),
  ],
}
