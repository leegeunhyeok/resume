/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const _Base = require('./src/data/_base.json');
const InjectAssetsListWebpackPlugin = require('inject-assets-list-webpack-plugin');

const generateGAScript = trackingId => `
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '${trackingId}');
  </script>
`;

const publicPath = process.env.NODE_ENV === 'development' ? '/' : _Base.publicPath || '/dist';

module.exports = {
  productionSourceMap: false,
  publicPath,
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
    devServer: {
      port: '8080',
      disableHostCheck: true,
    },
  },
  chainWebpack: config => {
    config
      .plugin('assets')
      .after('html')
      .use(
        new InjectAssetsListWebpackPlugin({
          allowPattern: /(png|jpg|svg)/,
        }),
      );

    config.plugin('html').tap(args => {
      args[0].title = _Base.title;
      args[0].publicPath = publicPath.replace(/\/+$/, '');
      args[0].gaScript = _Base.ga ? generateGAScript(_Base.ga) : '';
      args[0].description = _Base.introText.join(' ');
      return args;
    });
  },
  pwa: {
    name: _Base.app.name,
    themeColor: _Base.app.themeColor,
    msTileColor: _Base.app.themeColor,
    backgroundColor: _Base.app.themeColor,
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      // Auto mapping with publicPath
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: null,
      msTileImage: null,
    },
    manifestOptions: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      start_url: _Base.app.startUrl,
      // eslint-disable-next-line @typescript-eslint/camelcase
      theme_color: _Base.app.themeColor,
      icons: [
        {
          src: 'img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ].map(iconConfig => ({
        ...iconConfig,
        src: path.join(publicPath, iconConfig.src),
      })),
    },
  },
};
