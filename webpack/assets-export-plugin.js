/* eslint-disable @typescript-eslint/no-var-requires */
const { RawSource } = require('webpack-sources');
const fs = require('fs');

function AssetListExportPlugin(options) {
  console.log('custom ---')
  this.options = {
    ...{ filename: 'assets.json', pretty: false, extensions: [] },
    ...(options ? options : null),
  };
}




AssetListExportPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tapAsync('Asset List Plugin', (compilation, cb) => {
    const assets = compilation
      .getAssets()
      .filter(({ source }) => source instanceof RawSource)
      .filter(({ name }) => this.options.extensions.some(ext => name.endsWith(ext)))
      .map(({ name }) => name);

    fs.writeFile(
      this.options.filename,
      JSON.stringify(assets, null, this.options.pretty ? 2 : 0),
      err => {
        console.log('custom 2')
        if (err) {
          throw new Error(err);
        } else {
          cb();
        }
      },
    );
  });
};

module.exports = AssetListExportPlugin;
