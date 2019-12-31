module.exports = {
  lintOnSave: true,
  parallel: false,
  devServer: {
    open: false,
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      swDest: 'sw.js',
      navigateFallback: '/',
      offlineGoogleAnalytics: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com/,
          handler: 'cacheFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200],
            },
            cacheName: 'api',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 7 * 24 * 60 * 60,
            },
          },
        },
      ],
    },
  },
  pluginOptions: {
    apollo: {
      lintGQL: false,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/app.scss";`
      }
    }
  }
};
