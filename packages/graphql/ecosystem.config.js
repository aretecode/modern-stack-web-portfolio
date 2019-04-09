/**
 * https://pm2.io/doc/en/runtime/guide/ecosystem-file
 */
const NODE_ARGS = ['--max-old-space-size=8192']
const SRC_ARGS = []

const HOST = process.env.GRAPHQL_HOST || 'localhost'

module.exports = {
  apps: [
    {
      name: 'modern-stack-skeletons-graphql',
      script: `dist/index.js`,
      log_type: 'json',
      env: {
        GRAPHQL_API_PORT: 4000,
        BASE_URL: `http://${HOST}:4000`,
        IS_INSIDE_PM2: true,
      },
      args: SRC_ARGS,
      node_args: NODE_ARGS,
    },
  ],
}
