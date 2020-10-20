module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/dist',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Dev | Geundung';
      args[0].ga = 'UA-156696575-2';
      return args;
    });
  },
};
