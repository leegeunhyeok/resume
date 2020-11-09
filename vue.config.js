/* eslint-disable @typescript-eslint/no-var-requires */
const _Base = require('./src/data/_base.json');
const InjectAssetsListWebpackPlugin = require('inject-assets-list-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist',
  chainWebpack: config => {
    config
      .plugin('assets')
      .after('html')
      .use(
        new InjectAssetsListWebpackPlugin({
          allowPattern: /(png|jpg)/,
        }),
      );

    config.plugin('html').tap(args => {
      args[0].title = _Base.title;
      args[0].ga = _Base.ga;
      return args;
    });
  },
};
