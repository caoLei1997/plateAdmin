/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/cjj-api/': {
      target: 'https://electric.sxwinstar.net/api',
      changeOrigin: true,
      pathRewrite: {
        '/cjj-api/': '',
      },
    },
    '/vehicle-pre/': {
      target: 'http://vehicle.natapp1.cc/',
      changeOrigin: true,
      pathRewrite: {
        '/vehicle-pre/': '',
      },
    },
  },
  test: {
    '/api/': {
      target: 'https://electric.sxwinstar.net/api',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'https://electric.sxwinstar.net',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
