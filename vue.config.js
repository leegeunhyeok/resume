/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const _Base = require('./src/data/_base.json');
const AssetListExportPlugin = require('./webpack/assets-export-plugin');
const assetsListName = 'preload-assets.json';

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist',
  chainWebpack: config => {
    config
      .plugin('assets')
      .before('html')
      .use(
        new AssetListExportPlugin({
          filename: assetsListName,
          pretty: true,
        }),
      )
      .end()
      .plugin('html')
      .tap(args => {
        args[0].title = _Base.title;
        args[0].ga = _Base.ga;
        try {
          args[0].assets = fs.readFileSync(assetsListName, { encoding: 'utf-8' });
        } catch {
          console.error('ERR');
        }
        return args;
      });
  },
};
