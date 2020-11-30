/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const pkg = require('./package.json');
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

const outputDir = 'dist';
const publicPath =
  process.env.NODE_ENV === 'development'
    ? '/'
    : (process.env.GITHUB_PAGES ? '/dist' : _Base.publicPath) || '/dist';
const themeColor = '#ffffff';

if (process.env.GITHUB_PAGES) {
  console.log('\n> GitHub pages build mode enabled!\n');
  console.log('> 1. npm run build:github (current)');
  console.log('> 2. git add .');
  console.log('> 3. git commit -m "COMMIT MESSAGE"');
  console.log('> 4. git push origin master');
}

module.exports = {
  productionSourceMap: false,
  outputDir,
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

    config.plugin('copy').tap(args => {
      args[0].push({
        from: path.resolve(__dirname, 'package.json'),
        to: path.resolve(__dirname, outputDir, 'package.json'),
      });
      return args;
    });

    config.plugin('html').tap(args => {
      if (process.env.GITHUB_PAGES) {
        args[0].filename = path.resolve(__dirname, 'index.html');
      }
      args[0].title = _Base.title;
      args[0].publicPath = publicPath.replace(/\/+$/, '');
      args[0].gaScript = _Base.ga ? generateGAScript(_Base.ga) : '';
      args[0].description = _Base.introText.join(' ');
      args[0].gp = process.env.GITHUB_PAGES;
      return args;
    });
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      cacheId: 'resume_' + pkg.version,
      exclude: [/\.html$/],
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true,
      swDest: path.resolve(process.env.GITHUB_PAGES ? '.' : outputDir, 'service-worker.js'),
      runtimeCaching: [
        {
          urlPattern: /index\.html/,
          handler: 'NetworkFirst',
        },
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
        },
        {
          urlPattern: new RegExp('^https://cdn.jsdelivr.net(.*)'),
          handler: 'CacheFirst',
        },
      ],
    },
    name: _Base.app.name,
    themeColor,
    msTileColor: themeColor,
    backgroundColor: themeColor,
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
      theme_color: themeColor,
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
