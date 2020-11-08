/* eslint-disable @typescript-eslint/no-var-requires */
const { RawSource } = require('webpack-sources');
const fs = require('fs');

const defaultOption = {
  filename: 'assets.js',
  ignore: undefined,
  extension: undefined,
  absPath: false,
  pretty: false,
};

function AssetListExportPlugin(options) {
  console.log('custom ---');
  this.options = {
    ...defaultOption,
    ...options,
  };
}

AssetListExportPlugin.prototype.apply = function(compiler) {
  const { filename, ignore, extension, combinePublicPath, pretty } = this.options;
  const publicPath = compiler.options.output.publicPath || '/';

  compiler.hooks.emit.tapAsync('AssetListExportPlugin', (compilation, cb) => {
    const assets = compilation
      .getAssets()
      .filter(({ source }) => source instanceof RawSource)
      .filter(({ name }) => (ignore ? !name.match(ignore) : true))
      .filter(({ name }) => (extension ? name.match(extension) : true))
      .map(({ name }) => (combinePublicPath ? publicPath + name : name));

    fs.writeFile(
      filename,
      `window.__assets=${JSON.stringify(assets, null, pretty ? 2 : 0)}`,
      err => {
        console.log('custom 2');
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
