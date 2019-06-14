const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config) {
    config.resolve.alias.components = path.join(__dirname, 'components');

    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]-[hash:base64:5]',
  },
});
